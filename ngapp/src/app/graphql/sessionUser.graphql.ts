import { Injectable } from '@angular/core';
import { Query, Mutation } from 'apollo-angular';
import gql from 'graphql-tag';

export interface SessionDetail {
  sessionToken: string;
  status: string;
  userID: string;
  expiration: number;
}

export interface SessionResponse {
  sessionDetail: SessionDetail;
}

@Injectable({
  providedIn: 'root',
})
export class GetSessionGQL extends Query<SessionResponse> {
  document = gql`
    query GetSession {
      sessionDetail {
        sessionToken
        status
        userID
        expiration
      }
    }`;
}
