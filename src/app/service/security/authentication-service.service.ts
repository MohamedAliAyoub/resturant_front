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
          return response;
        }
      )
    )
  }
}
