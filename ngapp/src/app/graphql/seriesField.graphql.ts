import { Injectable } from '@angular/core';
import { Query, Mutation } from 'apollo-angular';
import gql from 'graphql-tag';

import { FormDetail } from '.';

export interface SeriesDetail {
  id: string;
  name: string;
  uri: string;
  imageUrl: string;
  year: number;
  forms: FormDetail[];
}

export interface SeriesResponse {
  seriesByUri: SeriesDetail;
}

@Injectable({
  providedIn: 'root',
})
export class GetSeriesByUriGQL extends Query<SeriesResponse> {
  document = gql`
    query seriesByUri($seriesUri: String!) {
	    seriesByUri(uri: $seriesUri) {
        id
        name
        uri
        imageUrl
        year
        forms {
          id
          type
          formstackId
          name
          uri
          imageUrl
          seriesUri
          part
        }
      }
    }`;
}
