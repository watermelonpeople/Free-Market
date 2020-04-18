import {Component, OnInit} from '@angular/core';
import {User} from '../../models/user.model.client';
import {UserService} from '../../services/user.service.client';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  idToDelete: string;
  users: User[];
  emailToDelete:string;

  searchAllUser() {
    this.service.findAllUsers().subscribe(
      user => {this.users = user},
      err => console.error(err),
      () => console.log('done searching'));

  }


  constructor(
    private service: UserService
  ) {
  }

  ngOnInit(): void {
  }

}
