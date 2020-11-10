import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categories } from '../categories/categories';

@Injectable()
export class CategoryService {

  constructor(private http:HttpClient) { }
  categories:Categories[]

  getCategories():Observable<Categories[]>{
    return this.http.get<Categories[]>("http://localhost:3000/categories")
  }
}
