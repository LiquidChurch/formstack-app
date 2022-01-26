import { Injectable } from '@angular/core';
import { Query, Mutation } from 'apollo-angular';
import gql from 'graphql-tag';

import { FieldDetail } from '.';

export interface FormDetail {
  id: string;
  formstackId: string;
  name: string;
  uri: string;
  seriesUri: string;
  part: number;
  fields: FieldDetail[]
}

export interface FormResponse {
  formByUri: FormDetail;
}

@Injectable({
  providedIn: 'root',
})
export class GetFormByUriGQL extends Query<FormResponse> {
  document = gql`
    query formByUri($formUri: String!) {
	    formByUri(uri: $formUri) {
        id
        type
        formstackId
        name
        uri
        imageUrl
        seriesUri
        part
      }
    }`;
}
