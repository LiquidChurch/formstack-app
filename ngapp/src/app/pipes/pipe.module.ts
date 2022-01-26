import { NgModule } from '@angular/core';
import { SafeHtmlPipe, SafeUrlPipe, BibleRefPipe } from '.';

@NgModule({
    imports: [],
    declarations: [
      SafeHtmlPipe,
      SafeUrlPipe,
      BibleRefPipe,
    ],
    exports: [
      SafeHtmlPipe,
      SafeUrlPipe,
      BibleRefPipe,
    ]
})
export class PipesModule { }