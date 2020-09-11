package authorizations

import (
  "strings"  
  "strconv"
  "errors"
  "encoding/json"
  "math/rand"
  "time"
  
  "X/gosrv/src/helpers"
  "X/gosrv/src/models"
)

func CreateJWTSession(c helpers.ContextDetail) (models.JWTPayload) {
  c.Fun = "Create JWT Session"
  helpers.Log(c, "info", "Triggered")    

  rand.Seed(time.Now().UnixNano())

  a := make([]byte, 32)
  _, _ = rand.Read(a)

  b := make([]byte, 32)
  _, _ = rand.Read(b)

  audToken := Base64Encode(a)
  jtiToken := Base64Encode(b)
  jwtDurationSec := GetJWTDurationSec();

  currentTimeInUnix := time.Now().Unix()
  expireTimeInUnix := currentTimeInUnix + jwtDurationSec

  jwtPayload := &models.JWTPayload {
    Sub: c.UID,
    Aud: audToken,
    Jti: jtiToken,
    Iat: currentTimeInUnix,
    Exp: expireTimeInUnix,
    Sid: "",
    Scopes: nil,
  }
  
  saveError := models.SaveJWTPayload(c.Ctx, c.Dts, jwtPayload.Aud, jwtPayload)

  if saveError != nil {
    helpers.Log(c, "error", "Saving JWTSession", "aud", jwtPayload.Aud, "error", saveError.Error())
  }

  jwtPayload.Sid = SignJWTToken(*jwtPayload)

  return *jwtPayload
}

func RefreshJWTSession(c helpers.ContextDetail, aud string, jti string) (models.JWTPayload, error) {
  c.Fun = "Refresh JWT Session"
  helpers.Log(c, "info", "Triggered") 

  jwtPayload, loadError := models.LoadJWTPayload(c.Ctx, c.Dts, aud)
  currentTimeInUnix := time.Now().Unix()
  jwtDurationSec := GetJWTDurationSec();
  if loadError != nil {
    return *models.NullJWTPayload, loadError
  }

  if jwtPayload.Jti != jti {        
    if jwtPayload.Exp >= currentTimeInUnix + (jwtDurationSec - 15)  {
      err := errors.New("JWT just refreshed")
      helpers.Log(c, "warning", "JWT Refresh", "error", err.Error())
      return *jwtPayload, nil
    } else {
      err := errors.New("JTI Mismatch")
      helpers.Log(c, "error", "JTI check fails", "aud", jwtPayload.Aud, "error", err.Error())
      return *models.NullJWTPayload, err      
    }
  }

  b := make([]byte, 32)
  _, _ = rand.Read(b)

  jwtPayload.Jti = Base64Encode(b)

  expireTimeInUnix := currentTimeInUnix + jwtDurationSec

  jwtPayload.Iat = currentTimeInUnix
  jwtPayload.Exp = expireTimeInUnix

  saveError := models.SaveJWTPayload(c.Ctx, c.Dts, jwtPayload.Aud, jwtPayload)

  if saveError != nil {
    helpers.Log(c, "error", "Saving JWTSession", "aud", jwtPayload.Aud, "error", saveError.Error())
  }

  jwtPayload.Sid = SignJWTToken(*jwtPayload)
  return *jwtPayload, nil
}

func ValidateJWTSession(c helpers.ContextDetail,  sessionToken string) (models.JWTPayload, error) {    
  c.Fun = "Validate JWT Session"
  helpers.Log(c, "info", "Triggered") 

  token := strings.Split(sessionToken, ".")

  header := JWTHeader{}

  if len(token) != 3 {
    splitErr := errors.New("Invalid JWT token")
    return *models.NullJWTPayload, splitErr
  }

  encodedHeader, errHeader := Base64Decode(token[0])
  errHeader = json.Unmarshal([]byte(encodedHeader), &header)

  if errHeader != nil {
    errHeader := errors.New("Invalid Header in JWT token")
    return *models.NullJWTPayload, errHeader
  }

  if header.Typ != "JWT" {return *models.NullJWTPayload, errors.New("Invalid token type, only JWT allowed")}
  if header.Alg != "HS256" {return *models.NullJWTPayload, errors.New("Invalid algorithm type, only HS256 allowed")}    

  payload, errDecode := DecodeJWTToken(token[1])

  if errDecode != nil {
    return  *models.NullJWTPayload, errDecode
  }

  currentTimeInUnix := time.Now().Unix()
  tokenAge := currentTimeInUnix - payload.Iat
  if currentTimeInUnix > payload.Exp {return *models.NullJWTPayload, errors.New("Token is expired," + strconv.FormatInt(tokenAge, 10))}

  isValidated := CompareHmac(token[2], token[0] + "." + token[1])            

  if isValidated {
    payload.Sid = sessionToken
    return payload, nil
  } else {
    err := errors.New("Invalid JWT token")
    return *models.NullJWTPayload, err
  }
}