import { FormHomePage } from './formHome.page';
import { FormShowPage } from './formShow.page';
import { FormPDFPage } from './formPDF.page';

export const FormRoutes = [
  {path: '', component: FormHomePage,
  children: [
    {path: ':id', component: FormShowPage},
    {path: 'pdf/:id', component: FormPDFPage},
  ]}
];
