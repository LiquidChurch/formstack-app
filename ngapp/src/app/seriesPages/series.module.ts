import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NbIconModule } from '@nebular/theme';

import { NbLayoutModule, NbCardModule, NbInputModule, NbButtonModule, NbActionsModule} from '@nebular/theme';

import { SeriesRoutes } from './series.routes';
import { SeriesPage } from './series.page';
import { SeriesSpecific } from './seriesSpecific.page';

@NgModule({
  declarations: [
    SeriesPage,
    SeriesSpecific,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(SeriesRoutes),
    NbLayoutModule,
    NbInputModule,
    NbButtonModule,
    NbCardModule,
    NbActionsModule,
  ],
  exports: [
  ]
})
export class SeriesModule {}