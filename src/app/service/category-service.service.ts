import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Category} from "../model/category";

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {

  baseUrl = 'http://localhost:8080/api/allCategories';
  constructor(private http: HttpClient) { }
  getAllCategories():Observable<Category[]>
  {
    return this.http.get<Category[]>(this.baseUrl).pipe(
      map(
        response => response
      )
    )
  }
}
