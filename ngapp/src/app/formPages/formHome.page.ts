import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormFieldComponent } from './formField.component';
import { CookieService } from 'ngx-cookie-service';

import { SessionController } from '../controller';
import { SessionDetail } from '../graphql';

@Component({
  templateUrl: './formHome.page.html'
})
          
export class FormHomePage implements OnInit {
  session: Observable<SessionDetail>
  
  constructor(private sessionController: SessionController,
              private cookie: CookieService) {  
  }
  
  ngOnInit() {
    console.log('formHome')
    
    this.sessionController.callSession().then(value => {
      if (value === "success") {
        console.log('success called session query')
        this.session = this.sessionController.getSession();
        this.updateCookie()        
      }
    })
    
    
    
  }
  
  updateCookie() {
    this.session.subscribe(session => {
      console.log('userID', session.userID)
      console.log('status', session.status)
      
      if (session.status === 'Refresh') {
        console.log('Refreshing Session Token')
        const expDate = new Date();
        expDate.setSeconds(expDate.getSeconds() + session.expiration);
        setTimeout(() => this.cookie.set('authToken', session.sessionToken, null, '/', '', true, 'Lax'), 0);
      }
    })
  }
}              