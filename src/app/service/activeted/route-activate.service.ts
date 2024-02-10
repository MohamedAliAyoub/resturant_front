import { Injectable } from '@angular/core';
import {AuthenticationServiceService} from "../security/authentication-service.service";
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RouteActivateService {

  constructor(private auth: AuthenticationServiceService,
              private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.auth.isLogin()){
      return true;
    }
    this.router.navigateByUrl("/login")
    return false;
  }
}
