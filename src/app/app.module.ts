import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderItemsComponent } from './component/order-items/order-items.component';
import {HttpClientModule} from "@angular/common/http";
import { CategoryItemComponent } from './component/category-item/category-item.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderItemsComponent,
    CategoryItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
