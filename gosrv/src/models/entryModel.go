package models

import (
  "context"
  "cloud.google.com/go/datastore"  
  "time"
)

type FieldEntry struct {
    FieldID         string
    Entry           string
    LastModified    time.Time
}


func SaveEntry(ctx context.Context, dts datastore.Client, indexKey string, saveRecord *FieldEntry) error {
  dbKind := "FieldEntry"
  key := datastore.NameKey(dbKind, indexKey, nil)
  key.Namespace = dBNamespace
  
  if _, err := dts.Put(ctx, key, saveRecord); err != nil {
    return err
  }
  return nil
}

func LoadEntry(ctx context.Context, dts datastore.Client, indexKey string) (*FieldEntry, error) {  
  dbKind := "FieldEntry"
  key := datastore.NameKey(dbKind, indexKey, nil)
  key.Namespace = dBNamespace
  
  e := new(FieldEntry)
  if err := dts.Get(ctx, key, e); err != nil {
    return nil, err             
  }
  
  return e, nil
}