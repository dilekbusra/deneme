import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Product } from '../product/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor( private http:HttpClient) { }
  path="http://localhost:3000/products";


  getProduct(categoryId): Observable<Product[]>{
    let newPath= this.path
    if(categoryId){
      newPath= newPath + "?categoryId=" + categoryId
    }
     return this.http.get<Product[]>(newPath);  }
}
