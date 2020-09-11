package gqlSchemas

import (
  "context"
  
  "X/gosrv/src/helpers"
  "X/gosrv/src/models"
  "X/gosrv/src/authorizations"
)

func (r *Resolver) SessionDetail(ctx context.Context) *sessionDetailResolver {
  jwtPayload := ctx.Value("JWT").(models.JWTPayload)
  c := ctx.Value("GAE").(helpers.ContextDetail)
  c.Fun = "Session Resolver"
//  helper.Log(c, "info", "Started")
  
  if c.UID == "00000000000000000000000000" {
    helpers.Log(c, "warning", "No User ID found") 
    userID, err := helpers.GenerateULID()

    if err != nil {
      helpers.Log(c, "error", "Generate UserID", "error", err.Error())
    } else {
      c.UID = userID      
    }
    jwtPayload = authorizations.CreateJWTSession(c)
  } 
  
  sID := jwtPayload.Sid
  eXP := int32(0)
  isRefresh := false
  if sID == "" {
    helpers.Log(c, "info", "Session Detail", "error", "No Session")
    sID = "not_valid"
  }

  if sID != "not_valid"  {
    eXP, isRefresh = authorizations.CalculateEXP(sID)
  }

  return &sessionDetailResolver{c.UID, sID, eXP, isRefresh}
}

type sessionDetailResolver struct {
  uID string
  sID string
  eXP int32
  isRefresh bool
}

func (r *sessionDetailResolver) SessionToken() string {
  if r.uID == "00000000000000000000000000" {
    return ""
  } else {
    return r.sID
  }
}

func (r *sessionDetailResolver) UserID() string {
  if r.uID == "00000000000000000000000000" {
    return ""
  } else {
    return r.uID
  }
}

func (r *sessionDetailResolver) Status() string {
  if (r.uID == "00000000000000000000000000" || r.uID == "") {
    return "Unauthorized"
  } else {
    if r.isRefresh {
      return "Refresh"
    } else {
      return "Authorized"
    }
  }
}

func (r *sessionDetailResolver) Expiration() int32 {
  if r.uID == "00000000000000000000000000" {
    return int32(0)
  } else {
    return r.eXP
  }
}