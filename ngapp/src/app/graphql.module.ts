import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { APOLLO_OPTIONS } from 'apollo-angular';

import { CookieService } from 'ngx-cookie-service';

const uri = '../query';

@NgModule({
  exports: [
    HttpClientModule
  ]
})

export class GraphQLModule {
  constructor(
    apollo: Apollo,
    httpLink: HttpLink,
    private cookie: CookieService,
    private router: Router
  ) {

  const http = httpLink.create({ uri });

  const afterwareLink = new ApolloLink((operation, forward) => {
    return forward(operation).map((response) => {
      const { response: {body} } = operation.getContext();

      if (typeof body.data.driverLogin != "undefined") {
        console.log("Driver Login Detected")
        if (body.data.driverLogin.status === 'Refresh') {
          this.cookie.set('authToken', body.data.driverLogin.sessionToken);
          this.cookie.set('authType', 'Session');
          //setTimeout(() => this.cookie.set('authToken', body.data.driverLogin.sessionToken, null, '/', '', true, 'Lax'), 0);
         // setTimeout(() => this.cookie.set('authType', 'Session', null, '/drivers', '', true, 'Lax'),0);
        } else {
          console.log('Unauthorized User');
          this.cookie.delete('authToken', '/');
          this.cookie.delete('authType', '/');
          // this.router.navigate(['']);
        }
      }
      if (typeof body.data.sessionDetail != "undefined") {
        if (body.data.sessionDetail.status === 'Authorized') {
          console.log('Authorized User');
          // this.router.navigate(['overview']);
        } else if (body.data.sessionDetail.status === 'Refresh') {
          console.log('Refreshing Session Token')
          this.cookie.set('authToken', body.data.sessionDetail.sessionToken);
          this.cookie.set('authType', 'Session');

          //const expDate = new Date();
          //expDate.setSeconds(expDate.getSeconds() + body.data.sessionDetail.expiration);
          //setTimeout(() => this.cookie.set('authToken', body.data.sessionDetail.sessionToken, null, '/', '', true, 'Lax'), 0);
          //setTimeout(() => this.cookie.set('authType', 'Session', null, '/drivers', '', true, 'Lax'),0);
          // this.router.navigate(['overview']);
        } else {
          console.log('Unauthorized User');
          this.cookie.delete('authToken', '/');
          this.cookie.delete('authType', '/');
          // this.router.navigate(['']);
        }
      } 
      return response;      
    }
      
      );
  });
  
  }
}