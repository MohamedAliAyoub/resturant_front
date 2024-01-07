import {Component, NgModule} from '@angular/core';
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
  page: number = 1;
  pageLength: number = 9;
  orderSize: number = 0;

  constructor(private order: OrderServiceService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      () => {
        this.finishOrders()
      }
    )
  }

  finishOrders() {
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
   this.order.getOrdersLength().subscribe(
     data=>{
       this.orderSize = data;
     }
   )

    this.order.getOrders(this.page - 1, this.pageLength).subscribe(
      data => {
        this.orders = data;
      }
    )
  }

  getOrderByCategoryId() {
    let categoryId = this.route.snapshot.paramMap.get('id');
    this.order.getOrdersLengthByCategoryId(categoryId).subscribe(
      data=>{
        this.orderSize =data;
      }
    )

    this.order.getOrdersByCategoryId(categoryId, this.page - 1, this.pageLength).subscribe(
      data => {
        this.orders = data;
      }
    )
  }

  getAllOrdersContainingKey() {
    let valueOfSearch = this.route.snapshot.paramMap.get('key');
    this.order.getOrdersLengthByKey(valueOfSearch).subscribe(
      data=>{
        this.orderSize = data;
      }
    )

    this.order.getOrdersByKey(valueOfSearch, this.page - 1, this.pageLength).subscribe(
      data => {
        this.orders = data;
      }
    )
  }

  pageSize(event: Event) {
    this.pageLength = +(<HTMLInputElement>event.target).value
    this.finishOrders()
  }
}
