package gqlSchemas

import (
  b64 "encoding/base64"
  
  "X/gosrv/src/models"  
  "X/gosrv/src/helpers"
)

type fieldDetailResolver struct {
  c helpers.ContextDetail
  u *models.FieldDetail
}

func (r *fieldDetailResolver) FieldId() string {
  return r.u.FieldID
}

func (r *fieldDetailResolver) Label() string {
  return r.u.Label
}

func (r *fieldDetailResolver) Description() string {
  return r.u.Description
}

func (r *fieldDetailResolver) Name() string {
  return r.u.Name
}

func (r *fieldDetailResolver) Type() string {
  return r.u.Type
}

func (r *fieldDetailResolver) SectionText() string {
  return r.u.SectionText
}

func (r *fieldDetailResolver) Sort() int32 {
  return int32(r.u.Sort)
}

func (r *fieldDetailResolver) Required() string {
  return r.u.Required
}

func (r *fieldDetailResolver) DefaultValue() string {
  return r.u.DefaultValue
}

func (r *fieldDetailResolver) IsLeader() bool {
  return r.u.IsLeaderGuide
}

func (r *fieldDetailResolver) Entry() *entryDetailResolver {
  if r.u.Type == "textarea" {
    id := r.c.UID + "-" + r.u.FieldID
    encId := b64.StdEncoding.EncodeToString([]byte(id))
  
    entry, _ := models.LoadEntry(r.c.Ctx, r.c.Dts, encId)
    
    if entry != nil {
      return &entryDetailResolver{r.c, entry} 
    }
  }
  
  var nullResponse = &models.FieldEntry {
    FieldID: r.u.FieldID,
    Entry: "",
  }
  return &entryDetailResolver{r.c, nullResponse}
}
