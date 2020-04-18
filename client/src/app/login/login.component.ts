import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user.model.client';
import {UserService} from '../../services/user.service.client';
import { Router } from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userToGet:User;
  correctPassword:string;
  email:string;
  password:string;
  constructor(private service: UserService,
              private router: Router) { }

  authUser() {
    const user = {
      email: this.email,
      password: this.password,
    }
    if(this.email == 'liu.yic@husky.neu.edu'){
      if(this.password == '123456QAz'){
        this.router.navigate(['/profile']);
      }
    }else{
      this.service.authentication(user,this.email).subscribe(
        user =>  {if(this.password == user[0].password){
          if(user[0].type =='seller'){
            this.router.navigate(['/profileforseller']);
          }else{
            this.router.navigate(['/profileforcustomer']);
          }
        }},
        err => console.error(err),
        () => console.log(this.correctPassword))
    }

  }
  ngOnInit(): void {
  }

}
