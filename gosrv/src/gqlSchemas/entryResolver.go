package gqlSchemas

import (
  "X/gosrv/src/helpers"
  "X/gosrv/src/models"
)


type entryDetailResolver struct {
  c helpers.ContextDetail
  u *models.FieldEntry
}

func (r *entryDetailResolver) FieldId() string {
  return r.u.FieldID
}

func (r *entryDetailResolver) Entry() string {
  return r.u.Entry
}

