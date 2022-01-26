import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NbThemeModule } from '@nebular/theme';
import { NbLayoutModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

import { APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache } from '@apollo/client/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FieldsController, SessionController, SeriesController, FormController, SeriesListController } from './controller';

import { NbCardModule, NbActionsModule } from '@nebular/theme';

import { PipesModule } from './pipes/pipe.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NbEvaIconsModule,
    NbThemeModule.forRoot(),
    NbCardModule,
    NbActionsModule,
    PipesModule,
    NbLayoutModule,
  ],
  providers: [
    CookieService,
    FieldsController,
    SessionController,
    SeriesController,
    SeriesListController,
    FormController,
    {
      provide: APOLLO_OPTIONS,
      useFactory(httpLink: HttpLink) {
        return {
          cache: new InMemoryCache(),
          link: httpLink.create({
            uri: '../query',
          }),
        };
      },
      deps: [HttpLink],
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
