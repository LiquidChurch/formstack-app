package gqlSchemas

import (
    "log"
    "time"
    "context"
  
    "X/gosrv/src/models"
    "X/gosrv/src/helpers"
    "X/gosrv/src/services"
)


func (r *Resolver) SyncForm(ctx context.Context, args *struct {FormID string}) (*statusDetailResolver, error) {
    c := ctx.Value("GAE").(helpers.ContextDetail)
    c.Fun = "SyncForm Resolver"
    helpers.Log(c, "info", "Started")
    
    status := "ok"
    modifyTime := time.Now()
    
    databaseFields, err1 := models.LoadFieldsByFormID(c.Ctx, c.Dts, args.FormID)
    if err1 != nil {
        return nil, err1
    }

    if databaseFields == nil {
      databaseFields = &[]models.FormstackField{}
    }
    
    formstackFields, err2  := services.FormstackLoad(c, args.FormID)
    if err2 != nil {
        return nil, err2
    }
    
    for _, formstackField := range *formstackFields {
        
        newField := true
        
        // Update Exsting Fields in Database
        for i, field := range *databaseFields {
            if field.FieldID == formstackField.FieldID {

                formstackField.ID = field.ID
                formstackField.FormID = field.FormID
                formstackField.LastModified = modifyTime
                formstackField.IsDeleted = false
                
                (*databaseFields)[i] = formstackField
                
                newField = false
                log.Println("existing field update")
                break
            } else {
                continue
            }
        }
        
        // Adding New Fields to Database
        if newField {
            log.Println("new field created")
            indexID, err := helpers.GenerateULID()
            if err != nil {
                helpers.Log(c, "error", "Error creating ULID", "err", err.Error())
                status = "error"
            }
            formstackField.ID = indexID
            formstackField.FormID = args.FormID
            formstackField.LastModified = modifyTime
            formstackField.IsDeleted = false
            
          (*databaseFields) = append((*databaseFields), formstackField)
        }
    }

   
    
    for _, databaseField :=range *databaseFields {
        // Marking Deleted Database Fields
        if databaseField.LastModified != modifyTime {
            log.Println("marking field deleted")
            databaseField.IsDeleted = true
            databaseField.LastModified = modifyTime
        }    
        
        models.SaveField(c.Ctx, c.Dts, databaseField.ID, &databaseField)
    }
        
    return &statusDetailResolver{status, c.UID, c.CID}, nil
}
