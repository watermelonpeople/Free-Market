import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs'
import { Product } from '../models/product.model.client'
import {Store} from "../models/store.model.client";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class ProductService {
  constructor(private http: HttpClient) {
  }

  createStore(newProduct) {
    let body = JSON.stringify(newProduct);
    console.log('created')
    return this.http.post('http://localhost:3000/api/createNewProduct', body, httpOptions)
      .subscribe();
  }

  findAllProduct(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:3000/api/findAllProduct/')

  }

  findStoreByStoreId(id):Observable<Store> {
    return this.http.get<Store>('http://localhost:3000/api/findStoreByStoreId/' + id)
  }

}
