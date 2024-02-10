import {Component} from '@angular/core';
import {Order} from "../../model/order";
import {OrderServiceService} from "../../service/order-service.service";
import {Router} from "@angular/router";
import {AuthenticationServiceService} from "../../service/security/authentication-service.service";

@Component({
  selector: 'app-search-order',
  templateUrl: './search-order.component.html',
  styleUrls: ['./search-order.component.css']
})
export class SearchOrderComponent {
  orders: Order[] = [];

  constructor(private orderService: OrderServiceService,
              private router: Router,
              private auth: AuthenticationServiceService) {
  }

  ngOnInit(): void {

  }

  doSearch(value: string) {

    this.router.navigateByUrl('/orderSearch/' + value);
  }

  isAuthenticatedUser(){
    return this.auth.isLogin();
  }

  logOut() {
    this.auth.logOut()
    this.router.navigateByUrl("/login")
  }
}
