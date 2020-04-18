import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service.client';
@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.css']
})
export class UserDeleteComponent implements OnInit {
  idToDelete:string;
  constructor(private service:UserService) { }
  deleteUser() {
    this.service.deleteUserById(this.idToDelete).subscribe()

  }
  ngOnInit(): void {
  }

}
