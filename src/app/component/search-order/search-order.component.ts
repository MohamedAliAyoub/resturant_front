import {Component} from '@angular/core';
import {Order} from "../../model/order";
import {OrderServiceService} from "../../service/order-service.service";
import {Router} from "@angular/router";
import {AuthenticationServiceService} from "../../service/security/authentication-service.service";
import {CartServiceService} from "../../service/cart-service.service";

@Component({
  selector: 'app-search-order',
  templateUrl: './search-order.component.html',
  styleUrls: ['./search-order.component.css']
})
export class SearchOrderComponent {
  orders: Order[] = [];

  constructor(private orderService: OrderServiceService,
              private router: Router,
              private auth: AuthenticationServiceService,
              private card: CartServiceService) {
  }

  ngOnInit(): void {

  }

  doSearch(value: string) {

    this.router.navigateByUrl('/orderSearch/' + value);
  }

  isAuthenticatedUser() {
    return this.auth.isLogin();
  }

  logOut() {
    this.card.orders = [];
    this.card.totalOrders.next(0);
    this.card.totalPrice.next(0);
    this.auth.logOut()
    this.router.navigateByUrl("/login")
  }
}
