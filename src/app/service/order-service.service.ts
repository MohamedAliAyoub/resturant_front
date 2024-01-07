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

  getOrders(page: number, size: number): Observable<Order[]> {

    return this.http.get<Order[]>(`${this.baseUrl}allOrders?page=${page}&size=${size}`).pipe(
      map(response => response),
    );
  }

  getOrdersByCategoryId(id:any , page:number , size: number): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.baseUrl}category?id=${id}&page=${page}&size=${size}`).pipe(
      map(response => response),
    );
  }
  getOrdersByKey(word:any , page:number , size:number): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.baseUrl}orderSearch?word=${word}&page=${page}&size=${size}`).pipe(
      map(
        response => response
      )
    )
  }

  getOrderById(id:any) : Observable<Order>{
    return this.http.get<Order>(`${this.baseUrl}order?id=${id}`).pipe(
      map(
        response => response
      )
    )
  }

  getOrdersLength() : Observable<number>{
    return this.http.get<number>(`${this.baseUrl}orderSize`).pipe(
      map(
        response => response
      )
    )
  }
  getOrdersLengthByCategoryId(id:any) : Observable<number>{
    return this.http.get<number>(`${this.baseUrl}categoryIdSize?id=${id}`).pipe(
      map(
        response => response
      )
    )
  }

  getOrdersLengthByKey(word:any) : Observable<number>{
    return this.http.get<number>(`${this.baseUrl}keySize?id=${word}`).pipe(
      map(
        response => response
      )
    )
  }
}
