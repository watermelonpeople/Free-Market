
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient,HttpHeaders} from "@angular/common/http";
import {Store} from "../models/store.model.client";
import {User} from "../models/user.model.client";
import {Review} from "../models/review.model.client";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()


export class ReviewService {

  constructor(private http: HttpClient) {}

  findReviewById(id):Observable<Review>
  {
    return this.http.get<Review>('https://cs5200projectlyc.herokuapp.com/api/reviewById/' + id)
  }

  findStoreByName(name): Observable<Store[]> {
    return this.http.get<Store[]>('https://cs5200projectlyc.herokuapp.com/api/findstorebyname/' + name)
  }

  findReviewByUserId(id) : Observable<Review[]> {
    return this.http.get<Review[]>('https://cs5200projectlyc.herokuapp.com/api/reviewSearch/reviews/'+id)
  }

  createStore(newStore){
    let body = JSON.stringify(newStore);
    console.log('created')
    return this.http.post('https://cs5200projectlyc.herokuapp.com/api/createReview', body, httpOptions)
      .subscribe();
  }
}
