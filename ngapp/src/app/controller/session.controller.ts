import { Apollo } from 'apollo-angular';
import { Injectable } from '@angular/core';
import { Observable, Subject, of as observableOf} from 'rxjs';
import { map } from 'rxjs/operators';
import gql from 'graphql-tag';

import { SessionDetail, GetSessionGQL } from '../graphql';

@Injectable()
export class SessionController {
  private session: Observable<SessionDetail>;
  
  constructor(private getSessionGQL: GetSessionGQL) {
  }
  
  callSession(): Promise<string> {
    return new Promise(resolve => {
      this.session = this.getSessionGQL.watch()
      .valueChanges
      .pipe(
        map(result => result.data.sessionDetail)
      )
      
      this.session.subscribe(() => {
          resolve("success");          
      })
    })
  }
  
  getSession(): Observable<SessionDetail> {
    return this.session
  }
  
}