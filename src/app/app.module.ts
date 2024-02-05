import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {OrderItemsComponent} from './component/order-items/order-items.component';
import {HttpClientModule} from "@angular/common/http";
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

const routes: Routes = [


  // http://localhost:4200/login
  {path: 'login', component:LoginComponent},
  // http://localhost:4200/signup
  {path: 'signup', component:SignupComponent},
  // http://localhost:4200/check-out
  {path: 'check-out', component:CheckOutComponent},
  // http://localhost:4200/purachases
  {path: 'purchases', component:PurchasesComponent},
  // http://localhost:4200/order/id
  {path: 'order/:id', component:OrderDetailsComponent},
  // http://localhost:4200/category/id
  {path: 'category/:id', component:OrderItemsComponent},
  // http://localhost:4200/category
  {path: 'category', component:OrderItemsComponent},
  // http://localhost:4200/orders
  {path: 'orderSearch/:key', component:OrderItemsComponent},
  // http://localhost:4200/orders/key
  {path: 'orders', component:OrderItemsComponent},
  // http://localhost:4200/
  {path: '', redirectTo: '/orders',pathMatch: 'full'},
  // if user enter anything without all routes
  {path: '**', redirectTo: '/orders',pathMatch: 'full'},

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
