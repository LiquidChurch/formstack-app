package gqlSchemas

import (
    "time"
    "errors"
    "context"
    "X/gosrv/src/models"
    "X/gosrv/src/helpers"  
)

type formInput struct {
    Id          string
    Type        string
    FormstackId string
    Name        string
    Uri         string
    ImageUrl    string
    SeriesId    string
    Part        int32
}

func (r *Resolver) FormByUri(ctx context.Context, args *struct {Uri string}) (*formDetailResolver, error) {
    c := ctx.Value("GAE").(helpers.ContextDetail)
    c.Fun = "Form Get by Uri Resolver"
    helpers.Log(c, "info", "Started")
  
    if args.Uri == "" {
        helpers.Log(c, "warning", "URI not provided")    
        err := errors.New("Invalid URI.")
        return nil, err
    }
    
    form, err :=  models.LoadFormByUri(c.Ctx, c.Dts, args.Uri)

    if form==nil && err != nil {
        helpers.Log(c, "error", "Error Loading Form", "formUri", args.Uri, "error", err.Error())    
        err = errors.New("Error Loading Form.")
        return nil, err
    }
    
    if form == nil {
        return nil, nil
    }
    
    return &formDetailResolver{c, form}, nil
}

func (r *Resolver) FormSave(ctx context.Context, args *struct {Input formInput}) (*formDetailResolver, error) {
    c := ctx.Value("GAE").(helpers.ContextDetail)
    c.Fun = "Form Save Resolver"
    helpers.Log(c, "info", "Started")
  
    var form *models.FormDetail
    form = new(models.FormDetail)

    if args.Input.SeriesId != "" {
        lookupSeries, err := models.LoadSeries(c.Ctx, c.Dts, args.Input.SeriesId)
        
        if err != nil {
            helpers.Log(c, "error", "Error Loading Series", "seriesId", args.Input.Id, "error", err.Error())    
            err = errors.New("Invalid Series ID.")
            return nil, err
        }
        
        if lookupSeries != nil {
            form.SeriesID = lookupSeries.ID
        } 
    }

    if form.SeriesID == "" {
        helpers.Log(c, "warning", "SeriesId not valid")    
        err := errors.New("Ivalid Series ID.")
        return nil, err 
    }
      
    if args.Input.Id != "" {
        lookupForm, err := models.LoadForm(c.Ctx, c.Dts, args.Input.Id)
        
        if err != nil {
            helpers.Log(c, "error", "Error Loading Form", "formId", args.Input.Id, "error", err.Error())    
            err = errors.New("Invalid ID.")
            return nil, err
        }
        
        if lookupForm != nil {
            form.ID = lookupForm.ID
        } 
    }     
  
    if form.ID == "" {
        newID, err := helpers.GenerateULID()
        if err != nil {
            helpers.Log(c, "error", "Error creating ULID", "err", err.Error())
            err = errors.New("Error Creating New Form.")
            return nil, err
        }
        form.ID = newID
    }
    
    form.Type = args.Input.Type
    form.Name = args.Input.Name
    form.Uri = args.Input.Uri
    form.ImageUrl = args.Input.ImageUrl
    form.FormstackID = args.Input.FormstackId
    form.Part = args.Input.Part
    form.LastModified = time.Now()
    form.IsDeleted = false
    
    err := models.SaveForm(c.Ctx, c.Dts, form.ID, form)
    if err != nil {
        helpers.Log(c, "error", "Error creating ULID", "err", err.Error())
        err = errors.New("Error Creating New Form.")
        return nil, err
    }
    
    return &formDetailResolver{c, form}, nil
  
}
