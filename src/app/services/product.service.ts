import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { product } from '../model/product';

const PRODUCT_URL = 'http://localhost:3001/products'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http : HttpClient) { }

  getProducts() : Observable<any>{
    return this.http.get(PRODUCT_URL)
  }

  getProductDetail(productId : number) : Observable<product>{
    return this.http.get<product>(PRODUCT_URL+'?id='+productId)
  }

  getProductByName(productName : String) : Observable<any>{
    return this.http.get(PRODUCT_URL+'?name='+productName)
  }
}

