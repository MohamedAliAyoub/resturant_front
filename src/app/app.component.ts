import { Component } from '@angular/core';
import {CookieService} from "ngx-cookie-service";
import {AuthenticationServiceService} from "./service/security/authentication-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front';

  constructor(private cook: CookieService,
              private auth: AuthenticationServiceService) { }
  isLogin(){
    return this.auth.isLogin()
  }
}
