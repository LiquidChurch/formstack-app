package gqlSchemas

import (
    "time"
    "errors"
    "context"
    "X/gosrv/src/models"
    "X/gosrv/src/helpers"  
)

type seriesInput struct {
    Id        string
    Name      string
    Uri       string
    ImageUrl  string
    Year      int32
}

func (r *Resolver) SeriesList(ctx context.Context) (*[]*seriesDetailResolver, error) {
    c := ctx.Value("GAE").(helpers.ContextDetail)
    c.Fun = "Series List Get"
    helpers.Log(c, "info", "Started")
  
    var seriesListDetailResolver []*seriesDetailResolver
  
    seriesList, err :=  models.LoadActiveSeries(c.Ctx, c.Dts)

    if err != nil {
        helpers.Log(c, "error", "Error Loading Series List", "error", err.Error())    
        err = errors.New("Error Loading Series List.")
        return nil, err
    }
    
    for i, _ := range *(seriesList) {
        seriesListDetailResolver = append(seriesListDetailResolver, &seriesDetailResolver{c, &(*seriesList)[i]})
    }  
    
    return &seriesListDetailResolver, nil
    //return &seriesDetailResolver{c, series}, nil  
}

func (r *Resolver) SeriesByUri(ctx context.Context, args *struct {Uri string}) (*seriesDetailResolver, error) {
    c := ctx.Value("GAE").(helpers.ContextDetail)
    c.Fun = "Series Get by Uri Resolver"
    helpers.Log(c, "info", "Started", "uri", args.Uri)
  
    if args.Uri == "" {
        helpers.Log(c, "warning", "URI not provided")    
        err := errors.New("Invalid URI.")
        return nil, err
    }
    
    series, err :=  models.LoadSeriesByUri(c.Ctx, c.Dts, args.Uri)

    if err != nil {
        helpers.Log(c, "error", "Error Loading Series", "seriesUri", args.Uri, "error", err.Error())    
        err = errors.New("Error Loading Series.")
        return nil, err
    }
    
    if series == nil {
        return nil, nil
    }
    
    return &seriesDetailResolver{c, series}, nil
}

func (r *Resolver) SeriesSave(ctx context.Context, args *struct {Input seriesInput}) (*seriesDetailResolver, error) {
    c := ctx.Value("GAE").(helpers.ContextDetail)
    c.Fun = "Series Save Resolver"
    helpers.Log(c, "info", "Started")
  
    var series *models.SeriesDetail
    series = new(models.SeriesDetail)
    
    if args.Input.Id != "" {
        lookupSeries, err := models.LoadSeries(c.Ctx, c.Dts, args.Input.Id)
        
        if err != nil {
            helpers.Log(c, "error", "Error Loading Series", "seriesId", args.Input.Id, "error", err.Error())    
            err = errors.New("Invalid ID.")
            return nil, err
        }
        
        if lookupSeries != nil {
            series.ID = lookupSeries.ID
        } 
    } 

    if series.ID == "" {
        newID, err := helpers.GenerateULID()
        if err != nil {
            helpers.Log(c, "error", "Error creating ULID", "err", err.Error())
            err = errors.New("Error Creating New Series.")
            return nil, err
        }
        series.ID = newID
    }
    
    series.Name = args.Input.Name
    series.Uri = args.Input.Uri
    series.ImageUrl = args.Input.ImageUrl
    series.Year = args.Input.Year
    series.LastModified = time.Now()
    series.IsDeleted = false
    
    err := models.SaveSeries(c.Ctx, c.Dts, series.ID, series)
    if err != nil {
        helpers.Log(c, "error", "Error creating ULID", "err", err.Error())
        err = errors.New("Error Creating New Series.")
        return nil, err
    }    
    
    return &seriesDetailResolver{c, series}, nil  
}
