import { Injectable } from '@angular/core';
import {AuthenticationServiceService} from "../security/authentication-service.service";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {map, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {CookieService} from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class LoginActiveService implements CanActivate{

  private baseUrl = 'http://localhost:8080/';


  constructor(private auth: AuthenticationServiceService,
              private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.auth.isLogin()){
      this.router.navigateByUrl("/orders")
      return false
    }
    return true;
  }




}
