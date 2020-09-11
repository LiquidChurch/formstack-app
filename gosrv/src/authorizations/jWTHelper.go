package authorizations

import (
  "os"
  "time"
  "strings"
  "strconv"
  "errors"
  "net/url"
  "encoding/base64"
  "encoding/json"
  "crypto/hmac"
  "crypto/sha256"

  "X/gosrv/src/models"
)

var secret = os.Getenv("JWT_SECRET")

func GetJWTDurationSec () int64 {
  jwtDurationSec, _ := strconv.ParseInt(os.Getenv("JWT_DURATION_SEC"),10, 64)
  return jwtDurationSec
}

type JWTHeader struct {
  Alg         string  `json:"alg"`
  Typ         string  `json:"typ"`
}

func DecodeJWTToken(encodedJWTPayload string) (models.JWTPayload, error) {
  payload := models.JWTPayload{}

  encodedPayload, errPayload := Base64Decode(encodedJWTPayload)
  errPayload = json.Unmarshal([]byte(encodedPayload), &payload)

  if errPayload != nil {
    errPayload := errors.New("Invalid Payload in JWT token")
    return *models.NullJWTPayload, errPayload
  }

  return payload, nil
}

func SignJWTToken(jwtPayload models.JWTPayload) string {    
  jwtHeader := JWTHeader {
    Alg: "HS256",
    Typ: "JWT",
  }

  header, _ := json.Marshal(jwtHeader)
  payload, _ := json.Marshal(jwtPayload)

  encodedHeader := Base64Encode(header)
  encodedPayload := Base64Encode(payload)
  encodedSignature := strings.Replace(url.QueryEscape(hmac256(encodedHeader + "." + encodedPayload, secret)), "%", "", -1)

  sessionToken := encodedHeader + "." + encodedPayload + "." + encodedSignature

  return sessionToken
}

func Base64Encode(src []byte) string {
  str := strings.TrimRight(base64.StdEncoding.EncodeToString(src), "=")
  return str
}

func Base64Decode(src string) (string, error) {
  remainder := len(src)%4
  if remainder > 0 {
    for i := remainder; i <= 3 ; i++ { src = src + "=" }
  }

  decoded, err := base64.StdEncoding.DecodeString(src)

  if err != nil {
    return "", err
  }

  return string(decoded), nil
}

func hmac256(src string, secret string) string {
  key := []byte(secret)
  h := hmac.New(sha256.New, key)
  h.Write([]byte(src))
  return Base64Encode(h.Sum(nil))
}

func CompareHmac(messageHmac string, message string) bool {
  signature := strings.Replace(url.QueryEscape(hmac256(message, secret)), "%", "", -1)
  return messageHmac == signature
}

func CalculateEXP(sID string) (int32, bool) {
  jwtPayload := strings.Split(sID, ".")
  payload, _ := DecodeJWTToken(jwtPayload[1])
  jwtDurationSec := GetJWTDurationSec();

  currentTimeInUnix := time.Now().Unix()
  
  expLength := int32(payload.Exp - currentTimeInUnix)
  isRefresh := false
  if expLength + 2 >= int32(jwtDurationSec) {
    isRefresh = true
  } 
  return expLength, isRefresh
}