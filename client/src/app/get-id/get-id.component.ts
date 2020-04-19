import {Component, OnInit} from '@angular/core';
import {User} from '../../models/user.model.client';
import {UserService} from '../../services/user.service.client';

@Component({
  selector: 'app-get-id',
  templateUrl: './get-id.component.html',
  styleUrls: ['./get-id.component.css']
})
export class GetIdComponent implements OnInit {
  user: User;
  email: string;
  password: string;
  Id:string;
  constructor(private service: UserService) {
  }

  getId() {
    const user = {
      email: this.email,
    }
    this.service.authentication(this.email).subscribe(
      user => {
        if (this.password == user[0].password) {
          this.Id = user[0]._id;
        }
      },
      err => console.error(err),
      () => console.log("Done"))
  }

  ngOnInit(): void {
  }

}
