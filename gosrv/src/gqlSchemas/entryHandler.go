package gqlSchemas

import (
  "time"  
  "context"
  b64 "encoding/base64"
  
  "X/gosrv/src/helpers"
  "X/gosrv/src/models"
)

func (r *Resolver) EntrySave(ctx context.Context, args *struct {Input models.FieldEntry}) (*entryDetailResolver, error) {
  c := ctx.Value("GAE").(helpers.ContextDetail)
  c.Fun = "Entry Save Resolver"
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
