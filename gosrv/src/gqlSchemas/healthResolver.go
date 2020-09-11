package gqlSchemas

import (
  "context"
  
  "X/gosrv/src/helpers"
)


func (r *Resolver) Health(ctx context.Context) (*statusDetailResolver) {
  c := ctx.Value("GAE").(helpers.ContextDetail)
  c.Fun = "Health Resolver"
  helpers.Log(c, "info", "Started")
  
  return &statusDetailResolver{"ok", c.UID, c.CID}
}

type statusDetailResolver struct {
  status string
  uid    string
  cid    string
}

func (r *statusDetailResolver) Status() string {
  return r.status
}

func (r *statusDetailResolver) UID() string {
  return r.uid
}

func (r *statusDetailResolver) CID() string {
  return r.cid
}