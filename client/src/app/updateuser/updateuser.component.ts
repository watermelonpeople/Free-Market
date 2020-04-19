import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service.client";

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {

  constructor(private service:UserService) { }
  id:string;
  firstname: string;
  lastname: string;
  username: string;
  type: string;
  email: string;
  password: string;
  phone: number;
  street1: string;
  street2: string;
  city: string;
  state: string;
  zip: number;


  updateUser() {
  this.service.updateUser({
    id:this.id,
    firstname: this.firstname,
    lastname: this.lastname,
    username: this.username,
    type: this.type,
    email: this.email,
    password: this.password,
    forPhone: [
      {
        number: this.phone
      }
    ],
    forAddress: [
      {
        street1: this.street1,
        street2: this.street2,
        city: this.city,
        state: this.state,
        zip: this.zip
      }
    ]
  })

  }

  ngOnInit(): void {
  }

}
