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

const routes: Routes = [
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
    SearchOrderComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
