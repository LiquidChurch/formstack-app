package gqlSchemas

import (
  "X/gosrv/src/models"  
  "X/gosrv/src/helpers"
)

type formDetailResolver struct {
  c helpers.ContextDetail
  u *models.FormDetail
}

func (r *formDetailResolver) Id() string {
  return r.u.ID
}

func (r *formDetailResolver) Type() string {
  return r.u.Type
}

func (r *formDetailResolver) FormstackId() string {
  return r.u.FormstackID
}

func (r *formDetailResolver) Name() string {
  return r.u.Name
}

func (r *formDetailResolver) Uri() string {
  return r.u.Uri
}

func (r *formDetailResolver) ImageUrl() string {
  return r.u.ImageUrl
}

func (r *formDetailResolver) SeriesUri() string {
  lookupSeries, err := models.LoadSeries(r.c.Ctx, r.c.Dts, r.u.SeriesID)
  if err != nil {
    helpers.Log(r.c, "error", "Error Loading Series By ID", "seriesID", r.u.SeriesID, "error", err.Error()) 
    return ""
  }
  return lookupSeries.Uri
}

func (r *formDetailResolver) Part() int32 {
  return int32(r.u.Part)
}

func (r *formDetailResolver) Fields() *[]*fieldDetailResolver {
  helpers.Log(r.c, "info", "Loading Fields By Formstack ID", "formstackID", r.u.FormstackID) 

  lookupFields, err := models.LoadFieldsByFormstackID(r.c.Ctx, r.c.Dts, r.u.FormstackID)
  
  var fieldsDetailResolver []*fieldDetailResolver
  
  if err != nil {
    helpers.Log(r.c, "error", "Error Loading Fields By Formstack ID", "formstackID", r.u.FormstackID, "error", err.Error()) 
    return nil
  }
  
  if lookupFields == nil {
    return nil
  }
  
  for i, _ := range *(lookupFields) {
    fieldsDetailResolver = append(fieldsDetailResolver, &fieldDetailResolver{r.c, &(*lookupFields)[i]})
  }  
  
  return &fieldsDetailResolver
}