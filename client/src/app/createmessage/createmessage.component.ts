import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service.client";
import {Store} from "../../models/store.model.client";

@Component({
  selector: 'app-createmessage',
  templateUrl: './createmessage.component.html',
  styleUrls: ['./createmessage.component.css']
})
export class CreatemessageComponent implements OnInit {
  text:string;
  sender:string;
  storeName:string;
  receiver:string;
  store:Store;
  now: Date = new Date();

  sendMessage(){
    this.service.findStoreByName(this.storeName).subscribe(
      stores => {this.receiver = stores[0].seller._id},
      err => console.error(err),
      () => this.service.createMessage({
        sender:this.sender,
        receiver:this.receiver,
        text:this.text,
        time:this.now
      })
    )
  }
  constructor(private service:UserService) {
    setInterval(() => {
      this.now = new Date();
    }, 1);

  }

  ngOnInit(): void {
  }

}
