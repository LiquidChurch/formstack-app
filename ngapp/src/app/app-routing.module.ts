import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormModule } from './formPages/form.module';
import { SeriesModule } from './seriesPages/series.module';
import { GuideModule } from './guidePages/guide.module';
import { SeriesListModule } from './seriesListPages/seriesList.module';

const routes: Routes = [
  {path: '', loadChildren: './seriesListPages/seriesList.module#SeriesListModule'},
  {path: 'form', loadChildren: './formPages/form.module#FormModule' },
  {path: 'series', loadChildren: './seriesPages/series.module#SeriesModule' },
  {path: 'guide', loadChildren: './guidePages/guide.module#GuideModule' }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
