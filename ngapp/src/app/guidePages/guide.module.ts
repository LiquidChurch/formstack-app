import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NbIconModule } from '@nebular/theme';

import { NbLayoutModule, NbCardModule, NbInputModule, NbButtonModule} from '@nebular/theme';

import { GuideRoutes } from './guide.routes';
import { GuidePage } from './guide.page';
import { GuideSpecific } from './guideSpecific.page';

import { FormPDFPage } from '../formPages/formPDF.page';
import { FormFieldComponent } from '../formPages/formField.component';
import { FormEmbedComponent } from '../formPages/formEmbed.component';

import { PipesModule } from '../pipes/pipe.module';

@NgModule({
  declarations: [
    GuidePage,
    GuideSpecific,
    FormFieldComponent,
    FormEmbedComponent,
  ],
  imports: [
    NbIconModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild(GuideRoutes),
    PipesModule,
    NbLayoutModule,
    NbInputModule,
    NbButtonModule,
    NbCardModule,
  ],
  exports: [
  ]
})
export class GuideModule {}