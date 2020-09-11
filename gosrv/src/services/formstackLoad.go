package services

import (
    "errors"
    "net/http"
    "io/ioutil"
    "encoding/json"
    "X/gosrv/src/models"    
    "X/gosrv/src/helpers"
)

type formstackResponse struct {
    Fields []models.FormstackField
}

func FormstackLoad(c helpers.ContextDetail, formID string) (*[]models.FormstackField, error) {
    url := "https://www.formstack.com/api/v2/form/" + formID + "/field"
    
    client := &http.Client{
      CheckRedirect: func(req *http.Request, via []*http.Request) error {
        return http.ErrUseLastResponse
      },
    }
    
    req, err := http.NewRequest("GET", url, nil)
  
    if err != nil {
        helpers.Log(c, "error", "Error Formstack Request", "error", err.Error())
        err := errors.New("Formstack API Error: 0010")
        return nil, err
    }
    req.Header.Set("Authorization", "Bearer 7a07944b8066d28e8620a30fd15db898")  
  
    resp, err := client.Do(req)
    if err != nil {
        helpers.Log(c, "error", "Error Formstack Response", "error", err.Error())
        err := errors.New("Formstack API Error: 0020")
      return nil, err
    }
    defer resp.Body.Close()
    
    if resp.StatusCode == 404 {
        helpers.Log(c, "error", "Error Formstack Not Found", "response code", resp.Status)
        return nil, nil        
    } else if resp.StatusCode != 200 {
        helpers.Log(c, "error", "Error Formstack Response", "response code", resp.Status)
        err := errors.New("Formstack API Error: 0030")
        return nil, err
    }

   
    body, err := ioutil.ReadAll(resp.Body)
    if err != nil {
        helpers.Log(c, "error", "Error Formstack Parse", "error", err.Error())
        err := errors.New("Formstack API Error: 0040")
        return nil, err
    }
    
    var respJson = new([]models.FormstackField)
    
    err = json.Unmarshal(body, &respJson)
    if err != nil {
        helpers.Log(c, "error", "Error Formstack Parse", "error", err.Error())
        err := errors.New("Formstack API Error: 0050")
        return nil, err
    }
  
    return respJson, nil
}
