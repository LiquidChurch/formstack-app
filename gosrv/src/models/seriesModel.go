package models

import (
  "errors"
  "sort"  
  "context"
  "google.golang.org/api/iterator" 
  "cloud.google.com/go/datastore"  
  "time" 
)

type SeriesDetail struct {
    ID              string
    Name            string
    Uri             string
    ImageUrl        string
    Year            int32
    LastModified    time.Time    
    IsDeleted       bool
}

type seriesListDetail []SeriesDetail

func (e seriesListDetail) Len() int {
  return len(e)
}

func (e seriesListDetail) Less(i, j int) bool {
    return e[i].Year > e[j].Year
}

func (e seriesListDetail) Swap(i, j int) {
   e[i], e[j] = e[j], e[i]
}

func SaveSeries(ctx context.Context, dts datastore.Client, indexKey string, saveRecord *SeriesDetail) error {
  dbKind := "SeriesDetail"
  key := datastore.NameKey(dbKind, indexKey, nil)
  key.Namespace = dBNamespace
  
  if _, err := dts.Put(ctx, key, saveRecord); err != nil {
    return err
  }
  return nil
}

func LoadSeries(ctx context.Context, dts datastore.Client, indexKey string) (*SeriesDetail, error) {  
  dbKind := "SeriesDetail"
  key := datastore.NameKey(dbKind, indexKey, nil)
  key.Namespace = dBNamespace
  
  e := new(SeriesDetail)
  if err := dts.Get(ctx, key, e); err != nil {
    return nil, err             
  }
  
  return e, nil
}

func LoadSeriesByUri(ctx context.Context, dts datastore.Client, uri string) (*SeriesDetail, error) {
  dbKind := "SeriesDetail"
  
  var foundRecords []SeriesDetail
  
  query := datastore.NewQuery(dbKind).
           Filter("Uri =", uri).
           Filter("IsDeleted =", false).
           Namespace(dBNamespace)
  
  transaction := dts.Run(ctx, query)
  
  for {
    var x SeriesDetail
    _, err := transaction.Next(&x)
    if err == iterator.Done {
      break
    }
    if err != nil {
      return nil, err
    }
    foundRecords = append(foundRecords, x)
  }
  
  if len(foundRecords) == 0 {
    return nil, nil
  } else if len(foundRecords) >= 2 {
    err := errors.New("Unexpected multiple records found, first one returned")
    return &foundRecords[0], err
  } else {
    return &foundRecords[0], nil
  }
}

func LoadActiveSeries(ctx context.Context, dts datastore.Client) (*[]SeriesDetail, error) {
  dbKind := "SeriesDetail"
  
  var foundRecords []SeriesDetail
  
  query := datastore.NewQuery(dbKind).
           Filter("Year >",0).
           Filter("IsDeleted =", false).
           Namespace(dBNamespace)
  
  transaction := dts.Run(ctx, query)
  
  for {
    var x SeriesDetail
    _, err := transaction.Next(&x)
    if err == iterator.Done {
      break
    }
    if err != nil {
      return nil, err
    }
    foundRecords = append(foundRecords, x)
  }
  
  if len(foundRecords) == 0 {
    return nil, nil
  } else {
    sort.Sort(seriesListDetail(foundRecords))
    return &foundRecords, nil
  }
}