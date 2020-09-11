package authorizations

import (
  "os"
  "time"
  "context"
  "strconv"
  "net/http"
  "cloud.google.com/go/datastore"
  
  "X/gosrv/src/helpers"
  "X/gosrv/src/models"
)

func AdminAuthnCheck(next http.Handler) http.Handler {
  return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {

    // Initiate Context
    c := helpers.ContextDetail {
      Ctx: r.Context(),
      Fun: "Admin Authentication Check",
      TID: helpers.GenerateTranID(),
      UID: "00000000000000000000000000",
      CID: "00000000000000000000000000",
      PID: "",
      DPT: 0,
    }
    helpers.Log(c, "info", "Transaction Start")

    // Initiate Datastore
    projectID := os.Getenv("APP_PROJECT_ID")

    dts, err := datastore.NewClient(r.Context(), projectID)
    if err != nil {
      helpers.Log(c, "error", "Datastore Connection Error", "error", err.Error()) 
    } else {
      c.Dts = *dts
    }
    defer dts.Close()
    models.ModelLoadNamespace()
  
    jwtPayload := *models.NullJWTPayload
    // Get Cookie if Exist
    var authnToken string
    authnToken = getAuthnCookies(r, c)

    if authnToken != "" {
      jwtPayload, err = ValidateJWTSession(c, authnToken)

      if err != nil {
          helpers.Log(c, "error", "Session Token Check", "error", err.Error())
        } else {
          c.UID = jwtPayload.Sub
      }

      currentTimeInUnix := time.Now().Unix()
      tokenAge := currentTimeInUnix - jwtPayload.Iat
      helpers.Log(c, "info", "Token Age", "tokenAge", strconv.FormatInt(tokenAge, 10))
      jwtRefreshSec, _ := strconv.ParseInt(os.Getenv("JWT_REFRESH_SEC"),10, 64)

      if tokenAge > jwtRefreshSec {
        helpers.Log(c, "debug", "Refresh Token Triggered", "aud", jwtPayload.Aud) 
        // sessionToken = RefreshJWTSession(c, jwtPayload.Aud, jwtPayload.Jti)
        jwtPayload, err = RefreshJWTSession(c, jwtPayload.Aud, jwtPayload.Jti)
        if err != nil {
          helpers.Log(c, "error", "JWT Refresh", "error", err.Error())
          c.UID = "00000000000000000000000000"
        }
      }
    } 
    
    /*
    if c.UID == "00000000000000000000000000" {
      userID, err := helpers.GenerateULID()
      
      if err != nil {
        helpers.Log(c, "error", "Generate UserID", "error", err.Error())
      } else {
        c.UID = userID      
      }
      jwtPayload = CreateJWTSession(c)
    }
    */
    
    next.ServeHTTP(w, requestWithAppengineContext(r, c, jwtPayload))
  })
}

func getAuthnCookies(r *http.Request, c helpers.ContextDetail) (string) {
    authnTokenCookie, err := r.Cookie("authToken")

    if err != nil {
      helpers.Log(c, "info", "Get AuthnToken Cookie", "error", err.Error())
      return ""
    } else {
      return authnTokenCookie.Value
    }
}

func requestWithAppengineContext(r *http.Request, c helpers.ContextDetail, jwtToken models.JWTPayload ) *http.Request {
	ctx := context.WithValue(r.Context(), "GAE", c)
	return r.WithContext(context.WithValue(ctx, "JWT", jwtToken))
}