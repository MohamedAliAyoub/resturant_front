import {Injectable} from '@angular/core';
import {CartOrder} from "../model/cart-order";

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  orders: CartOrder[] = [];
  totalOrders: number = 0;
  totalPrice: number = 0;

  constructor() {
  }

  addOrderToCart(order: CartOrder) {

    let isExist: boolean = false;
    let existOrder: CartOrder;
    if (this.orders.length > 0) {
      // for(let temp of this.orders){
      //   if(temp.id === order.id){
      //     existOrder = temp;
      //     break;
      //   }
      // }
      // @ts-ignore
      existOrder = this.orders.find(temp => temp.id === order.id);
    }
    // @ts-ignore
    isExist = (existOrder != undefined); // true   false
    if (isExist) {
      // @ts-ignore
      existOrder.quantity++;
    } else {
      this.orders.push(order)
    }
    this.calculateTotals();
    console.log(this.orders)
  }

  calculateTotals() {
    let totalElementsSizeOrders: number = 0;
    let totalPriceOrders: number = 0;
    for (let temp of this.orders){
      totalElementsSizeOrders += temp.quantity;
      totalPriceOrders += temp.quantity * temp.price ;
    }
    this.totalOrders = totalElementsSizeOrders;
    this.totalPrice = totalPriceOrders;
    console.log("size" +this.totalOrders);
    console.log("price" +this.totalPrice);
  }

}
