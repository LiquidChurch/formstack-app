package models

import (
  "time"
  "sort"
  "errors"
  "context"
  "google.golang.org/api/iterator" 
  "cloud.google.com/go/datastore" 
)

type FormDetail struct {
    ID              string
    Name            string
    Uri             string
    Type            string
    ImageUrl        string
    FormstackID     string  
    SeriesID        string
    Part            int32
    LastModified    time.Time    
    IsDeleted       bool
}

type formsDetail []FormDetail

func (e formsDetail) Len() int {
  return len(e)
}

func (e formsDetail) Less(i, j int) bool {
    return e[i].Part < e[j].Part
}

func (e formsDetail) Swap(i, j int) {
   e[i], e[j] = e[j], e[i]
}


func SaveForm(ctx context.Context, dts datastore.Client, indexKey string, saveRecord *FormDetail) error {
  dbKind := "FormDetail"
  key := datastore.NameKey(dbKind, indexKey, nil)
  key.Namespace = dBNamespace
  
  if _, err := dts.Put(ctx, key, saveRecord); err != nil {
    return err
  }
  return nil
}

func LoadForm(ctx context.Context, dts datastore.Client, indexKey string) (*FormDetail, error) {  
  dbKind := "FormDetail"
  key := datastore.NameKey(dbKind, indexKey, nil)
  key.Namespace = dBNamespace
  
  e := new(FormDetail)
  if err := dts.Get(ctx, key, e); err != nil {
    return nil, err             
  }
  
  return e, nil
}

func LoadFormByUri(ctx context.Context, dts datastore.Client, uri string) (*FormDetail, error) {
  dbKind := "FormDetail"
  
  var foundRecords []FormDetail
  
  query := datastore.NewQuery(dbKind).
           Filter("Uri =", uri).
           Filter("IsDeleted =", false).
           Namespace(dBNamespace)
  
  transaction := dts.Run(ctx, query)
  
  for {
    var x FormDetail
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

func LoadFormsBySerialID(ctx context.Context, dts datastore.Client, seriesID string) (*[]FormDetail, error) {
  dbKind := "FormDetail"
  
  var foundRecords []FormDetail
  
  query := datastore.NewQuery(dbKind).
           Filter("SeriesID =", seriesID).
           Filter("IsDeleted =", false).
           Namespace(dBNamespace)
  
  transaction := dts.Run(ctx, query)
  
  for {
    var x FormDetail
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
    sort.Sort(formsDetail(foundRecords))
    return &foundRecords, nil
  }
}