import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { SeriesListController } from '../controller';
import { SeriesDetail } from '../graphql';

@Component({
  templateUrl: './seriesList.page.html',
  styleUrls: ['./seriesList.css']
})
          
export class SeriesListPage implements OnInit { 
  seriesList: Observable<SeriesDetail[]>
  hasLoaded = false
  headerImage: string
  
  constructor(private seriesListController: SeriesListController) {  
  }
  
  ngOnInit() {
    this.seriesListController.loadSeriesList().then(value => {setTimeout(() => {this.hasLoaded = true},0)})
    this.seriesList = this.seriesListController.getSeriesList();
    
    this.headerImage = "https://lqd.imgix.net/website-heros/groupguides-img0-12.jpg?ar=16%3A9&fit=crop&w=828&auto=format"
    console.log(this.seriesList)
  }
}              