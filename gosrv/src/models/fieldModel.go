package models

import (
  "sort"
  "context"
  "google.golang.org/api/iterator" 
  "cloud.google.com/go/datastore"  
  "time"
)

type FieldDetail struct {
    ID              string      `json:"-"`
    FieldID         string      `json:"id"`
    Label           string      `json:"label"`
    Description     string      `json:"description"`
    Name            string      `json:"name"`
    Type            string      `json:"type"`
    SectionText     string      `json:"section_text" datastore:"-"`
    SectionByte     []byte      `json:"-" datastore:",noindex"`
    SortString      string      `json:"sort" "datastore:"-"`
    Sort            int         `json:"-"`
    Required        string      `json:"required"`
    DefaultValue    string      `json:"default"`
    LastModified    time.Time   `json:"-"`
    FormstackID     string      `json:"-"`
    IsDeleted       bool        `json:"-"`
    IsLeaderGuide   bool        `json:"-"`
}

type fieldsDetail []FieldDetail

func (e fieldsDetail) Len() int {
  return len(e)
}

func (e fieldsDetail) Less(i, j int) bool {
    return e[i].Sort < e[j].Sort
}

func (e fieldsDetail) Swap(i, j int) {
   e[i], e[j] = e[j], e[i]
}

func SaveField(ctx context.Context, dts datastore.Client, indexKey string, saveRecord *FieldDetail) error {
  dbKind := "FieldDetail"
  key := datastore.NameKey(dbKind, indexKey, nil)
  key.Namespace = dBNamespace
  
  _, err := dts.Put(ctx, key, saveRecord)
  if err != nil {
    return err
  }
  
  return nil
}

func LoadFieldsByFormstackID(ctx context.Context, dts datastore.Client, formstackID string) (*[]FieldDetail, error) {
  dbKind := "FieldDetail"
  
  var foundRecords []FieldDetail
  
  query := datastore.NewQuery(dbKind).
           Filter("FormstackID =", formstackID).
           Filter("IsDeleted =", false).
           Namespace(dBNamespace)
  
  transaction := dts.Run(ctx, query)
  
  for {
    var x FieldDetail
    _, err := transaction.Next(&x)
    if err == iterator.Done {
      break
    }
    if err != nil {
      return nil, err
    }
    
    x.SectionText = string(x.SectionByte)
    x.SectionByte = nil
    foundRecords = append(foundRecords, x)
  }
  
  if len(foundRecords) == 0 {
    return nil, nil
  } else {
    sort.Sort(fieldsDetail(foundRecords))
    return &foundRecords, nil
  }
}