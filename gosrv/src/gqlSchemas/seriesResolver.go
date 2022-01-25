package gqlSchemas

import (
  "X/gosrv/src/models"  
  "X/gosrv/src/helpers"
)

type seriesDetailResolver struct {
  c helpers.ContextDetail
  u *models.SeriesDetail
}

func (r *seriesDetailResolver) Id() string {
  return r.u.ID
}

func (r *seriesDetailResolver) Name() string {
  return r.u.Name
}

func (r *seriesDetailResolver) Uri() string {
  return r.u.Uri
}

func (r *seriesDetailResolver) ImageUrl() string {
  return r.u.ImageUrl
}

func (r *seriesDetailResolver) Year() int32 {
  return int32(r.u.Year)
}

func (r *seriesDetailResolver) Forms() *[]*formDetailResolver {
  helpers.Log(r.c, "info", "Loading Forms By Serial ID", "serialID", r.u.ID) 

  lookupForms, err := models.LoadFormsBySerialID(r.c.Ctx, r.c.Dts, r.u.ID)
  
  var formsDetailResolver []*formDetailResolver
  
  if err != nil {
    helpers.Log(r.c, "error", "Error Loading Forms By Serial ID", "serialID", r.u.ID, "error", err.Error()) 
    return nil
  }
  
  if lookupForms == nil {
    return nil
  }
  
  for i, _ := range *(lookupForms) {
    formsDetailResolver = append(formsDetailResolver, &formDetailResolver{r.c, &(*lookupForms)[i]})
  }  
  
  return &formsDetailResolver
}