import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Order} from "../model/order";

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {

  private baseUrl = 'http://localhost:8080/api/';
  constructor(private http: HttpClient) { }

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.baseUrl}allOrders`).pipe(
      map(response => response),
    );
  }

  getOrdersByCategoryId(id:any): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.baseUrl}category?id=${id}`).pipe(
      map(response => response),
    );
  }
}
