package gqlSchemas

import (
    "time"
    "context"
    "strings"
    "strconv"
    "X/gosrv/src/models"
    "X/gosrv/src/helpers"
    "X/gosrv/src/services"
)


func (r *Resolver) FormstackSync(ctx context.Context, args *struct {FormstackID string}) (*statusDetailResolver, error) {
    c := ctx.Value("GAE").(helpers.ContextDetail)
    c.Fun = "Formstack Sync Resolver"
    helpers.Log(c, "info", "Started")
    
    status := "ok"
    modifyTime := time.Now()
    
    databaseFields, err1 := models.LoadFieldsByFormstackID(c.Ctx, c.Dts, args.FormstackID)
    
    if err1 != nil {
        return nil, err1
    }

    if databaseFields == nil {
      databaseFields = &[]models.FieldDetail{}
    }
    
    formstackFields, err2  := services.FormstackLoad(c, args.FormstackID)
    if err2 != nil {
        return nil, err2
    }
    
    for _, formstackField := range *formstackFields {
        newField := true
        
        // Update Exsting Fields in Database
        for i, field := range *databaseFields {
            if field.FieldID == formstackField.FieldID {
                formstackField.ID = field.ID
                formstackField.FormstackID = field.FormstackID
                formstackField.LastModified = modifyTime
                formstackField.Sort, _ = strconv.Atoi(formstackField.SortString)
                formstackField.IsDeleted = false
                formstackField.IsLeaderGuide, formstackField.SectionByte = checkLeaderGuideType(formstackField.SectionText)
                
                (*databaseFields)[i] = formstackField
                
                newField = false
                
                break
            } else {
                continue
            }
        }
        
        // Adding New Fields to Database
        if newField {
            indexID, err := helpers.GenerateULID()
            if err != nil {
                helpers.Log(c, "error", "Error creating ULID", "err", err.Error())
                status = "error"
            }
            formstackField.ID = indexID
            formstackField.FormstackID = args.FormstackID
            formstackField.LastModified = modifyTime
            formstackField.Sort, _ = strconv.Atoi(formstackField.SortString)
            formstackField.IsDeleted = false
            formstackField.IsLeaderGuide, formstackField.SectionByte = checkLeaderGuideType(formstackField.SectionText)
            (*databaseFields) = append((*databaseFields), formstackField)
        }
    }

   
    
    for _, databaseField :=range *databaseFields {
        if databaseField.LastModified != modifyTime {
            databaseField.IsDeleted = true
            databaseField.LastModified = modifyTime
        }    
        
      err := models.SaveField(c.Ctx, c.Dts, databaseField.ID, &databaseField)
        if err != nil {
            helpers.Log(c, "error", "Error Saving Field", "err", err.Error())
            status = "error"
        }      
    }
        
    return &statusDetailResolver{status, c.UID, c.CID}, nil
}

func checkLeaderGuideType(text string) (bool, []byte) {
    isLeaderGuide := false
    
    var returnByte []byte
    
    if len(text) > 10 {
        if strings.ToLower(text[3:10]) == "#leader" {
            isLeaderGuide = true
            returnByte = []byte(text[14:len(text)])
        } else if strings.ToLower(text[0:7]) == "#leader" {
            isLeaderGuide = true
            returnByte = []byte(text[8:len(text)])
        } else {
          returnByte = []byte(text)
        }
    }

    return isLeaderGuide, returnByte
}