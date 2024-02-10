import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {

  private baseUrl = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  executeAuthentication(email: any, password: any): Observable<any>{
    return this.http.post<any>(`${this.baseUrl}signin`,{email,password}).pipe(
      map(
        response => {
          sessionStorage.setItem("email",response.email)
          sessionStorage.setItem("token",`Bearer ${response.token}`)
          // this.cook.set("email",response.email)
          // this.cook.set("token",`Bearer ${response.token}`)
          return response;
        }
      )
    )
  }

  createUser(email: any, password: any):Observable<any>{
    return this.http.post<any>(`${this.baseUrl}signup`,{email,password}).pipe(
      map(

        response => {
          sessionStorage.setItem("token",`Bearer ${response.token}`)
          console.log(response);
          return response;
        }
      )
    )
  }

  getAuthentication(){
    return sessionStorage.getItem("email");
  }
  // @ts-ignore
  getToken(){
    if(this.getAuthentication()){ //
      return sessionStorage.getItem('token')
    }
  }

  isLogin(){
    return !(sessionStorage.getItem('email') == null ||
      sessionStorage.getItem('token') == null);
  }
  logOut(){
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('token');
  }
}