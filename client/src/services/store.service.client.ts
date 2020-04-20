import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs'
import {Store} from "../models/store.model.client";
import {Product} from "../models/product.model.client";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class StoreService {
  constructor(private http: HttpClient) {
  }

  findStoreById(id): Observable<Store[]> {
    return this.http.get<Store[]>('https://cs5200projectlyc.herokuapp.com/api/findStoreByUserId/' + id)
  }

  findStoreByStoreId(id):Observable<Store> {
    return this.http.get<Store>('https://cs5200projectlyc.herokuapp.com/api/findStoreByStoreId/' + id)
  }

 findProductByStoreId(id):Observable<Product[]>{
    return this.http.get<Product[]>('https://cs5200projectlyc.herokuapp.com/api/findProductByStoreId/'+id)
 }

  findStoreByName(name): Observable<Store[]> {
    return this.http.get<Store[]>('https://cs5200projectlyc.herokuapp.com/api/findstorebyname/' + name)
  }

  findStoreByCategory(category):Observable<Store[]> {
    return this.http.get<Store[]>('https://cs5200projectlyc.herokuapp.com/api/findStoreByCategory/'+category)
  }

  findStoreByCity(city):Observable<Store[]> {
    return this.http.get<Store[]>('https://cs5200projectlyc.herokuapp.com/api/findStoreByCity/'+city)
  }

  createStore(newStore) {
    let body = JSON.stringify(newStore);
    console.log('created')
    return this.http.post('https://cs5200projectlyc.herokuapp.com/api/createStore', body, httpOptions)
      .subscribe();
  }

}
