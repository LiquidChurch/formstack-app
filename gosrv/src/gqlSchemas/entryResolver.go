package gqlSchemas

import (
  "time"  
  "context"
  b64 "encoding/base64"
  
  "X/gosrv/src/helpers"
  "X/gosrv/src/models"
)

func (r *Resolver) SaveField(ctx context.Context, args *struct {Input models.FieldEntry}) (*entryDetailResolver, error) {
  c := ctx.Value("GAE").(helpers.ContextDetail)
  c.Fun = "Save Field Mutation"
  helpers.Log(c, "info", "Started")
  
  if c.UID == "00000000000000000000000000" {
    helpers.Log(c, "warning", "No User ID found") 
    return nil, nil
  }
  
  if args.Input.FieldID == "" {
    helpers.Log(c, "warning", "No Field ID found") 
    return nil, nil
  }  
  id := c.UID + "-" + args.Input.FieldID
  encId := b64.StdEncoding.EncodeToString([]byte(id))
  
  args.Input.LastModified = time.Now()
  
  err := models.SaveEntry(c.Ctx, c.Dts, encId, &args.Input)
  
  if err != nil {
      helpers.Log(c, "error", "Error Saving Entry", "error", err.Error())
      return nil, err
  }
  
  return &entryDetailResolver{c, &args.Input}, nil
}

type entryDetailResolver struct {
  c helpers.ContextDetail
  u *models.FieldEntry
}

func (r *entryDetailResolver) FieldId() string {
  return r.u.FieldID
}

func (r *entryDetailResolver) Entry() string {
  return r.u.Entry
}

