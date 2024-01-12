export class RequestOrder {
  note: string;
  totalPrice: number;
  totalQuantity: number;

  constructor(note: string, totalPrice: number, totalQuantity: number) {
    this.note = note;
    this.totalPrice = totalPrice;
    this.totalQuantity = totalQuantity;
  }
}
