import { Apollo } from 'apollo-angular';
import { Injectable } from '@angular/core';
import { Observable, Subject, of as observableOf} from 'rxjs';
import { map } from 'rxjs/operators';
import gql from 'graphql-tag';

import { SeriesDetail, GetSeriesListGQL } from '../graphql';

@Injectable()
export class SeriesListController {
  private seriesList: Observable<SeriesDetail[]>;
  
  constructor(private apollo: Apollo,
              private getSeriesListGQL: GetSeriesListGQL) {
  }
  
  loadSeriesList(): Promise<string> {
    return new Promise(resolve => {
    this.seriesList = this.getSeriesListGQL.watch()
    .valueChanges
    .pipe(
      map(result => result.data.seriesList)
    )

    this.seriesList.subscribe(() => {
        resolve("success");          
    })
  })}
  
    
  getSeriesList(): Observable<SeriesDetail[]> {
    return this.seriesList
  }
}