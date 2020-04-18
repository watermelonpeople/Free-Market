import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs'
import {User} from '../models/user.model.client'

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {
  }

  findUserById(id): Observable<User> {
    return this.http.get<User>('http://localhost:3000/api/userById/' + id)

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

  authentication(user,email): Observable<User> {
    let body = JSON.stringify(user);
    console.log(body)
    this.http.post('http://localhost:3000/api/userAuth', body, httpOptions)
      .subscribe();
    return this.http.get<User>('http://localhost:3000/api/userByEmail/' +email);
  }


}
