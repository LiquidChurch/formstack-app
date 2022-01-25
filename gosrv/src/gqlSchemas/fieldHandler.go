package gqlSchemas

import (
  "context"
  
  "X/gosrv/src/models"  
  "X/gosrv/src/helpers"
 // "X/gosrv/src/services"
)

func (r *Resolver) FieldsByFormstackID(ctx context.Context, args *struct {FormstackID string}) (*[]*fieldDetailResolver, error) {
    c := ctx.Value("GAE").(helpers.ContextDetail)
    c.Fun = "Fields Get By FormstackID Resolver"
    helpers.Log(c, "info", "Started")

    var fieldsDetailResolver []*fieldDetailResolver
    
    formstackFields, err := models.LoadFieldsByFormstackID(c.Ctx, c.Dts, args.FormstackID)
    if err != nil {
        helpers.Log(c, "error", "Error Loading Fields By Formstack ID", "formstackID", args.FormstackID, "error", err.Error())
        return nil, err
    }
    
    if formstackFields == nil {
      return nil, nil
    }
  
    for i, _ := range *(formstackFields) {
        fieldsDetailResolver = append(fieldsDetailResolver, &fieldDetailResolver{c, &(*formstackFields)[i]})
    }  
  
    return &fieldsDetailResolver, nil
}



