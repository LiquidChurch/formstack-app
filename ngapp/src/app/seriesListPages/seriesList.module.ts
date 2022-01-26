import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { NbLayoutModule, NbCardModule, NbInputModule, NbButtonModule, NbActionsModule} from '@nebular/theme';

import { SeriesListRoutes } from './seriesList.routes';
import { SeriesListPage } from './seriesList.page';

@NgModule({
  declarations: [
    SeriesListPage,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(SeriesListRoutes),
    NbLayoutModule,
    NbInputModule,
    NbButtonModule,
    NbCardModule,
    NbActionsModule,    
  ],
  exports: [
  ]
})
export class SeriesListModule {}