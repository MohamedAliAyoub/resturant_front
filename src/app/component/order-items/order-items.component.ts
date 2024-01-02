import { Component } from '@angular/core';
import {Order} from "../../model/order";
import {OrderServiceService} from "../../service/order-service.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-order-items',
  templateUrl: './order-items.component.html',
  styleUrls: ['./order-items.component.css']
})
export class OrderItemsComponent {
  orders: Order[] = [];
  constructor(private order: OrderServiceService ,  private route: ActivatedRoute) { }
  ngOnInit():void{
    this.route.paramMap.subscribe(
      ()=>{
        this.finishOrders()
      }
    )
  }

  finishOrders()
  {
    let result = this.route.snapshot.paramMap.has('id');
    let searchResult = this.route.snapshot.paramMap.has('key');
    // alert(result);
    if (result)
      this.getOrderByCategoryId();
    else if (searchResult)
      this.getAllOrdersContainingKey();
    else
      this.getOrder()
  }
  getOrder() {
    this.order.getOrders().subscribe(
      data => {
        this.orders = data;
      }
    )
  }

  getOrderByCategoryId() {
    let categoryId = this.route.snapshot.paramMap.get('id');
    this.order.getOrdersByCategoryId(categoryId).subscribe(
      data => {
        this.orders = data;
      }
    )
  }

  getAllOrdersContainingKey() {
    let valueOfSearch = this.route.snapshot.paramMap.get('key');
    this.order.getOrdersByKey(valueOfSearch).subscribe(
      data => {
        this.orders = data;
      }
    )
  }
}
