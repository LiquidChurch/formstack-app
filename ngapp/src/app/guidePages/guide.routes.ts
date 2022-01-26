import { GuidePage } from './guide.page';
import { GuideSpecific } from './guideSpecific.page';

export const GuideRoutes = [
  {path: '', component: GuidePage,
  children: [
    {path: ':guideUri', component: GuideSpecific},
  ]}
];
