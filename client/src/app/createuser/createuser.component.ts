import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service.client";

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent implements OnInit {

  constructor(private service: UserService) { }


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


  createUser() {
    const newUser = {
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
    }
    this.service.createUser(newUser)

  }

  ngOnInit(): void {
  }

}
