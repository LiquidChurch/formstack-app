import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NbInputModule, NbButtonModule, NbCardModule } from '@nebular/theme';

import { FormRoutes } from './form.routes';
import { FormHomePage } from './formHome.page';
import { FormShowPage } from './formShow.page';
import { FormPDFPage } from './formPDF.page';
import { FormFieldComponent } from './formField.component';
import { FormEmbedComponent } from './formEmbed.component';

@NgModule({
  declarations: [
    FormHomePage,
    FormShowPage,
    FormPDFPage,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(FormRoutes),
    NbInputModule,
    NbButtonModule,
    NbCardModule,
  ],
  exports: [
  ]
})
export class FormModule {}