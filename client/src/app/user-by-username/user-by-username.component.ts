import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user.model.client';
import {UserService} from '../../services/user.service.client';

@Component({
  selector: 'app-user-by-username',
  templateUrl: './user-by-username.component.html',
  styleUrls: ['./user-by-username.component.css']
})
export class UserByUsernameComponent implements OnInit {
  username: string;
  user: User;
  constructor(private service:UserService) { }
  searchByUsername() {
    this.service.findUserByUsername(this.username).subscribe(
      user => {this.user = user[0]},
      err => console.error(err),
      () => console.log(this.user.firstname) )

  }
  ngOnInit(): void {
    this.searchByUsername()
  }

}
