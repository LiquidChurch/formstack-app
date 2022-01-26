import { Injectable } from '@angular/core';
import { Query, Mutation } from 'apollo-angular';
import gql from 'graphql-tag';

export interface EntryDetail {
  fieldId: string;
  entry: string;
}

export interface EntryResponse {
  entrySave: EntryDetail;
}

@Injectable({
  providedIn: 'root',
})
export class PostEntryGQL extends Query<EntryResponse> {
  document = gql`
    mutation postEntry($input: EntryInput!) {
      entrySave(input: $input) {
        fieldId
        entry
      }
    }`;
}
