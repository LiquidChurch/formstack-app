package gqlSchemas

import (
  "context"
  b64 "encoding/base64"
  
  "X/gosrv/src/models"  
  "X/gosrv/src/helpers"
  "X/gosrv/src/services"
)

func (r *Resolver) GetForm(ctx context.Context, args *struct {FormID string}) (*[]*fieldDetailResolver, error) {
    c := ctx.Value("GAE").(helpers.ContextDetail)
    c.Fun = "GetForm Resolver"
    helpers.Log(c, "info", "Started")

    formstackFields, err := services.FormstackLoad(c, args.FormID)
    if err != nil {
        helpers.Log(c, "error", "Error Loading Formstack", "error", err.Error())
        return nil, err
    }
    
    var objectsResolver []*fieldDetailResolver
 
    for i, _ := range *(formstackFields) {
        objectsResolver = append(objectsResolver, &fieldDetailResolver{c, &(*formstackFields)[i]})
    }  
  
  return &objectsResolver, nil
  
    return nil, nil
}

type fieldDetailResolver struct {
  c helpers.ContextDetail
  u *models.FormstackField
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

func (r *fieldDetailResolver) Sort() string {
  return r.u.Sort
}

func (r *fieldDetailResolver) Required() string {
  return r.u.Required
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
