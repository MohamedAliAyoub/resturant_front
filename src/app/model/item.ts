export class Item {
  img: string;
  quantity: number;
  price: number;

  constructor(img: string, quantity: number, price: number) {
    this.img = img;
    this.quantity = quantity;
    this.price = price;
  }
}
