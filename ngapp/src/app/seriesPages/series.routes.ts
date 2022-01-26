import { SeriesPage } from './series.page';
import { SeriesSpecific } from './seriesSpecific.page';

export const SeriesRoutes = [
  {path: '', component: SeriesPage,
  children: [
    {path: ':seriesUri', component: SeriesSpecific},
  ]}
];
