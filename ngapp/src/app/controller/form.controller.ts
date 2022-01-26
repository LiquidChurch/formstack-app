import { Apollo } from 'apollo-angular';
import { Injectable } from '@angular/core';
import { Observable, Subject, of as observableOf} from 'rxjs';
import { map } from 'rxjs/operators';
import gql from 'graphql-tag';

import { FormDetail, GetFormByUriGQL } from '../graphql';

@Injectable()
export class FormController {
  private form: Observable<FormDetail>
  private formUri: string
  
  constructor(private getFormByUriGQL: GetFormByUriGQL) {
  }
  
  getFormByUri(uri): Promise<string> {
    this.formUri = uri

    return new Promise(resolve => {
      this.form = this.getFormByUriGQL.watch(
      {formUri: this.formUri})
      .valueChanges
      .pipe(
        map(result => result.data.formByUri)
      )
      
      this.form.subscribe(() => {
          resolve("success");          
      })
    })
  }
  
  getForm(): Observable<FormDetail> {
    return this.form
  }
  
}