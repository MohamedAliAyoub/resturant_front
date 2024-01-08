import {Injectable} from '@angular/core';
import {map, Observable, pipe} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Country} from "../model/country";

@Injectable({
  providedIn: 'root'
})
export class StateCountryServiceService {

  private baseUrl = 'http://localhost:8080/api/';

  constructor(private http: HttpClient) {
  }

  getAllCountry(): Observable<Country[]>{
    return this.http.get<Country[]>(`${this.baseUrl}countries`).pipe(
      map(
        response => response
      )
    )
  }




}
