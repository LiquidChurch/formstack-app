package models

import (
  "context"
  "cloud.google.com/go/datastore"
)

type JWTPayload struct {
  Sub         string          `json:"sub"`        //subject (user id)
  Aud         string          `json:"aud"`        //audience (client id)
  Jti         string          `json:"jti"`        //jwt id
  Iat         int64           `json:"iat"`        //issue at time
  Exp         int64           `json:"exp"`        //expiration time
  Sid         string          `json:"sid"`        //sessionid
  Scopes      []ScopePayload  `json:"scope"`      //metadata
}

type ScopePayload struct {
  Scope   string  `json:"scope"`
  Access  string  `json:"access"`
}

/*
type AuthzPayload struct {
  Scopes        []ScopePayload  `json:"scopes"`
  UID           string          `json:"uId"`
  TranID        string          `json:"tranId"`
  SessionID     string          `json:"sId"`  
}
var NullAuthPayload = &AuthPayload {
  SiteID: "",
  Scopes: nil,
}
*/

var NullJWTPayload = &JWTPayload {
  Sub: "00000000000000000000000000",
  Aud: "",
  Jti: "",
  Iat: int64(0),
  Exp: int64(0),
  Sid: "",
  Scopes: nil,
}

func SaveJWTPayload(ctx context.Context, dts datastore.Client, indexKey string, saveRecord *JWTPayload) error {
  dbKind := "JWTPayloadDetail"

  key := datastore.NameKey(dbKind, indexKey, nil)
  key.Namespace = dBNamespace
  if _, err := dts.Put(ctx, key, saveRecord); err != nil {
    return err
  }
  return nil
}

func LoadJWTPayload(ctx context.Context, dts datastore.Client, indexKey string) (*JWTPayload, error) {
  dbKind := "JWTPayloadDetail"
  key := datastore.NameKey(dbKind, indexKey, nil)
  key.Namespace = dBNamespace
  e := new(JWTPayload)
  if err := dts.Get(ctx, key, e); err != nil{
    return NullJWTPayload, err
  }

  return e, nil
}