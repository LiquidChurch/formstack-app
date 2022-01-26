import { Injectable } from '@angular/core';
import { Query, Mutation } from 'apollo-angular';
import gql from 'graphql-tag';

import { EntryDetail } from '.';

export interface FieldDetail {
  fieldId: string;
  label: string;
  description: string;
  name: string;
  type: string;
  sectionText: string;
  sort: string;
  required: string;
  defaultValue : string;
  entry: EntryDetail;
}

export interface FieldDetails {
  fieldsByFormstackID: FieldDetail[];
}

@Injectable({
  providedIn: 'root',
})
export class GetFieldDetailGQL extends Query<FieldDetails> {
  document = gql`
    query getFields($formId: String!) {
	    fieldsByFormstackID(formstackID: $formId) {
        fieldId
        label
        description
        name
        type
        sectionText
        sort
        required
        defaultValue
        isLeader
        entry {
          fieldId
          entry
        }
      }
    }`;
}
