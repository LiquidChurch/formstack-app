import { Apollo } from 'apollo-angular';
import { Injectable } from '@angular/core';
import { Observable, Subject, of as observableOf} from 'rxjs';
import { map } from 'rxjs/operators';
import gql from 'graphql-tag';

import { FieldDetail, GetFieldDetailGQL } from '../graphql';
import { EntryDetail, EntryResponse, PostEntryGQL } from '../graphql';
@Injectable()
export class FieldsController {
  private fields: Observable<FieldDetail[]>;
  private formId: string
  
  constructor(private apollo: Apollo,
              private getFieldDetailGQL: GetFieldDetailGQL,
              private postEntryGQL: PostEntryGQL) {
  }
  
  getFormFields(formId): Promise<string> {
    this.formId = formId
    return new Promise(resolve => {
      this.fields = this.getFieldDetailGQL.watch(
      {formId: formId})
      .valueChanges
      .pipe(
        map(result => result.data.fieldsByFormstackID)
      )
      
      this.fields.subscribe(() => {
          resolve("success");          
      })
    })
  }
  
  getFields(): Observable<FieldDetail[]> {
    return this.fields
  }

  updateEntry(entry): Promise<string> {
    return new Promise(resolve => {
      this.apollo
        .mutate<EntryResponse>({
          mutation: this.postEntryGQL.document,
          variables: {input: entry},
          update: (store, {data: { entrySave }})=> {
              let data: any
              data = store.readQuery({ query: this.getFieldDetailGQL.document, variables: {formId : this.formId} })
              
              var j = data.fieldsByFormstackID.map(function(e) { return e.fieldId; }).indexOf(entrySave.fieldId)
              
              let newData: any
              newData = JSON.parse(JSON.stringify(data))
            
              newData.getForm[j].entry = entrySave
              store.writeQuery({ query: this.getFieldDetailGQL.document, data:newData})
            }
        })
        .subscribe(() => {
          resolve("success")
        })
      })
    }

}