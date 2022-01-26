import { Apollo } from 'apollo-angular';
import { Injectable } from '@angular/core';
import { Observable, Subject, of as observableOf} from 'rxjs';
import { map } from 'rxjs/operators';
import gql from 'graphql-tag';

import { SeriesDetail, GetSeriesByUriGQL } from '../graphql';

@Injectable()
export class SeriesController {
  private series: Observable<SeriesDetail>;
  private seriesUri: string
  
  constructor(private apollo: Apollo,
              private getSeriesByUriGQL: GetSeriesByUriGQL) {
  }
  
  getSeriesByUri(uri): Promise<string> {
    this.seriesUri = uri
    return new Promise(resolve => {
    this.series = this.getSeriesByUriGQL.watch(
    {seriesUri: this.seriesUri})
    .valueChanges
    .pipe(
      map(result => result.data.seriesByUri)
    )

    this.series.subscribe(() => {
        resolve("success");          
    })
  })}
  
    
  getSeries(): Observable<SeriesDetail> {
    return this.series
  }
}