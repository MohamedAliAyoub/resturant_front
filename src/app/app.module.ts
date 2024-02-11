import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {OrderItemsComponent} from './component/order-items/order-items.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {CategoryItemComponent} from './component/category-item/category-item.component';
import {RouterModule, Routes} from "@angular/router";
import { DropdownMenuComponent } from './component/dropdown-menu/dropdown-menu.component';
import { SearchOrderComponent } from './component/search-order/search-order.component';
import { OrderDetailsComponent } from './component/order-details/order-details.component';
import {NgbModule, NgbPagination} from '@ng-bootstrap/ng-bootstrap';
import { CardStatusComponent } from './component/card-status/card-status.component';
import { PurchasesComponent } from './component/purchases/purchases.component';
import { CheckOutComponent } from './component/check-out/check-out.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import {HttpIntercepterBaseAuthServiceService} from "./service/security/http-intercepter-base-auth-service.service";
import {LoginActiveService} from "./service/activeted/login-active.service";
import {RouteActivateService} from "./service/activeted/route-activate.service";
import {CookieService} from "ngx-cookie-service";
import { CodeActivationComponent } from './component/code-activation/code-activation.component';

const routes: Routes = [


  // http://localhost:4200/active
  {path: 'active', component:CodeActivationComponent},
  // http://localhost:4200/login
  {path: 'login', component:LoginComponent , canActivate:[LoginActiveService]},
  // http://localhost:4200/signup
  {path: 'signup', component:SignupComponent , canActivate:[LoginActiveService] },
  // http://localhost:4200/check-out
  {path: 'check-out', component:CheckOutComponent ,canActivate: [RouteActivateService]},
  // http://localhost:4200/purachases
  {path: 'purchases', component:PurchasesComponent ,canActivate: [RouteActivateService]},
  // http://localhost:4200/order/id
  {path: 'order/:id', component:OrderDetailsComponent ,canActivate: [RouteActivateService]},
  // http://localhost:4200/category/id
  {path: 'category/:id', component:OrderItemsComponent ,canActivate: [RouteActivateService]},
  // http://localhost:4200/category
  {path: 'category', component:OrderItemsComponent ,canActivate: [RouteActivateService]},
  // http://localhost:4200/orders
  {path: 'orderSearch/:key', component:OrderItemsComponent ,canActivate: [RouteActivateService]},
  // http://localhost:4200/orders/key
  {path: 'orders', component:OrderItemsComponent ,canActivate: [RouteActivateService]},
  // http://localhost:4200/
  {path: '', redirectTo: '/orders',pathMatch: 'full'},
  // if user enter anything without all routes
  {path: '**', redirectTo: '/orders',pathMatch: 'full' },

]

@NgModule({
  declarations: [
    AppComponent,
    OrderItemsComponent,
    CategoryItemComponent,
    DropdownMenuComponent,
    SearchOrderComponent,
    OrderDetailsComponent,
    CardStatusComponent,
    PurchasesComponent,
    CheckOutComponent,
    LoginComponent,
    SignupComponent,
    CodeActivationComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbPagination,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [
    {provide: HTTP_INTERCEPTORS,useClass: HttpIntercepterBaseAuthServiceService,multi: true} ,
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private cook: CookieService) { }

  ngOnInit(): void {
    if (this.isCookie()){
      sessionStorage.setItem("email",this.cook.get("email"))
      sessionStorage.setItem("token",this.cook.get("token"))
    }
  }

  isCookie(){
    if (this.cook.get('email') === '' || this.cook.get('token') === ''){
      return false;
    }
    return true;
  }
}
