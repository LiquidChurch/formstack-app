import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { CookieService } from 'ngx-cookie-service';

import { SessionController } from '../controller';
import { SessionDetail } from '../graphql';


@Component({
  templateUrl: './guide.page.html',
  styleUrls: ['./guide.css'] 
})
          
export class GuidePage implements OnInit {
  session: Observable<SessionDetail>
  constructor(private sessionController: SessionController,
              private cookie: CookieService) {  
  }
  
  ngOnInit() {
    this.sessionController.callSession().then(value => {
      if (value === "success") {
        this.session = this.sessionController.getSession();
        this.updateCookie()        
      }
    })
  }
  
  updateCookie() {
    this.session.subscribe(session => {
      
      if (session.status === 'Refresh') {
        const expDate = new Date();
        expDate.setSeconds(expDate.getSeconds() + session.expiration);
        setTimeout(() => this.cookie.set('authToken', session.sessionToken, null, '/', '', true, 'Lax'), 0);
      }
    })
  }
}              