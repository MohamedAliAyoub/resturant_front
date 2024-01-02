import {Component} from '@angular/core';
import {Order} from "../../model/order";
import {OrderServiceService} from "../../service/order-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-search-order',
  templateUrl: './search-order.component.html',
  styleUrls: ['./search-order.component.css']
})
export class SearchOrderComponent {
  orders: Order[] = [];

  constructor(private orderService: OrderServiceService,
              private router: Router) {
  }

  ngOnInit(): void {

  }

  doSearch(value: string) {

    this.router.navigateByUrl('/orderSearch/' + value);
  }
}
