import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs'
import {User} from '../models/user.model.client'
import {Store} from "../models/store.model.client";
import {Message} from "../models/message.model.client";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {
  }

  findStoreByName(name): Observable<Store[]> {
    return this.http.get<Store[]>('http://localhost:3000/api/findstorebyname/' + name)
  }

  findMessageByID(id) : Observable<Message>{
    return this.http.get<Message>('http://localhost:3000/api/messageSearch/' + id)
  }

  findUserById(id): Observable<User> {
    return this.http.get<User>('http://localhost:3000/api/user/' + id)

  }

  createMessage(message) {
    let body = JSON.stringify(message);
    console.log('created')
    return this.http.post('http://localhost:3000/api/message', body, httpOptions)
      .subscribe();
  }
  deleteUserById(id)  {
    return this.http.delete('http://localhost:3000/deleteUserById/' + id)
  }


  findUserByUsername(username): Observable<User> {
    console.log(username)
    return this.http.get<User>('http://localhost:3000/api/userByUserName/' + username)

  }

  findAllUsers(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:3000/api/users');
  }


  createUser(newUser) {
    let body = JSON.stringify(newUser);
    console.log('created')
    return this.http.post('http://localhost:3000/api/register', body, httpOptions)
      .subscribe();
  }

  authentication(email): Observable<User> {
    // let body = JSON.stringify(user);
    // console.log(body)
    // this.http.post('http://localhost:3000/api/userAuth', body, httpOptions)
    //   .subscribe();
    return this.http.get<User>('http://localhost:3000/api/userByEmail/' +email);
  }

  updateUser(user){
    let body = JSON.stringify(user);
    console.log('Updated')
    return this.http.put('http://localhost:3000/api/user:userId', body, httpOptions)
      .subscribe();
  }

}
