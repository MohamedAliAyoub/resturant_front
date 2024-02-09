import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map, Observable, throwError} from "rxjs";
import {Order} from "../model/order";

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {

  private baseUrl = 'http://localhost:8080/api/';

  constructor(private http: HttpClient) { }

  getOrders(page: number, size: number): Observable<Order[]> {

    const token = sessionStorage.getItem('token');
    if (!token) {
      // Handle the case where token doesn't exist
      // For example, you can redirect the user to the login page or show an error message
      console.error("Token not found in session storage");
      return throwError("Token not found in session storage");
    }

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
