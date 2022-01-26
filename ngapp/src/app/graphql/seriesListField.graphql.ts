import { Injectable } from '@angular/core';
import { Query, Mutation } from 'apollo-angular';
import gql from 'graphql-tag';

import { SeriesDetail } from '.';

export interface SeriesListResponse {
  seriesList: SeriesDetail[];
}

@Injectable({
  providedIn: 'root',
})
export class GetSeriesListGQL extends Query<SeriesListResponse> {
  document = gql`
    query seriesList {
	    seriesList {
        id
        name
        uri
        imageUrl
        year
      }
    }`;
}
