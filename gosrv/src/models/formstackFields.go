package models

import (
  "context"
  "google.golang.org/api/iterator" 
  "cloud.google.com/go/datastore"  
  "time"
)

type FormstackField struct {
    ID              string      `json:"_"`
    FieldID         string      `json:"id"`
    Label           string      `json:"label"`
    Description     string      `json:"description"`
    Name            string      `json:"name"`
    Type            string      `json:"type"`
    SectionText     string      `json:"section_text"`
    Sort            string      `json:"sort"`
    Required        string      `json:"required"`
    LastModified    time.Time   `json:"-"`
    FormID          string      `json:"-"`
    IsDeleted       bool        `json:"-"`
  
}

func SaveField(ctx context.Context, dts datastore.Client, indexKey string, saveRecord *FormstackField) error {
  dbKind := "FormstackField"
  key := datastore.NameKey(dbKind, indexKey, nil)
  key.Namespace = dBNamespace
  
  if _, err := dts.Put(ctx, key, saveRecord); err != nil {
    return err
  }
  return nil
}

func LoadFieldsByFormID(ctx context.Context, dts datastore.Client, formID string) (*[]FormstackField, error) {
  dbKind := "FormstackField"
  
  var foundRecords []FormstackField
  
  query := datastore.NewQuery(dbKind).
           Filter("FormID =", formID).
           Filter("IsDeleted =", false).
           Namespace(dBNamespace)
  
  transaction := dts.Run(ctx, query)
  
  for {
    var x FormstackField
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
    return &foundRecords, nil
  }
}