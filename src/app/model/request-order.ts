export class RequestOrder {
  totalPrice: number;
  totalQuantity: number;


  constructor( totalPrice: number, totalQuantity: number) {
    this.totalPrice = totalPrice;
    this.totalQuantity = totalQuantity;
  }
}
