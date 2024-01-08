import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StateCountryServiceService {

  private baseUrl = 'http://localhost:8080/api/';

  constructor() { }
  // getAllCountry() :Observable<any>{}

}
