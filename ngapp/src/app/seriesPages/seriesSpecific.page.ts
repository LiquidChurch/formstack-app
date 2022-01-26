import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';  
import { Observable } from 'rxjs';
import { Location } from '@angular/common'

import { SeriesController } from '../controller';
import { SeriesDetail, SeriesResponse } from '../graphql';

@Component({
  templateUrl: './seriesSpecific.page.html',
  styleUrls: ['./series.css'] 
})
          
export class SeriesSpecific implements OnInit {
  seriesUri: string
  series: Observable<SeriesDetail>
  hasLoaded = false
  
  constructor(private location: Location,
              private route: ActivatedRoute,
              private seriesController: SeriesController) {  
  }
  
  ngOnInit() {
    this.seriesUri = this.route.snapshot.paramMap.get('seriesUri');    
    this.seriesController.getSeriesByUri(this.seriesUri).then(value => {setTimeout(() => {this.hasLoaded = true},0)})
    this.series = this.seriesController.getSeries();
  }
    
  onBack() {
    this.location.back();
  }
  
}              