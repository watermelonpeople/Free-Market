import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service.client";
import {Message} from "../../models/message.model.client";

@Component({
  selector: 'app-showmymessages',
  templateUrl: './showmymessages.component.html',
  styleUrls: ['./showmymessages.component.css']
})
export class ShowmymessagesComponent implements OnInit {

  id:string;
  sendMessage:Message[];
  receiveMessage:Message[];

  search(){
    this.service.findUserById(this.id).subscribe(

      user => {

        this.sendMessage = user[0].sendMessages;
        this.receiveMessage = user[0].receiveMessages;
        console.log(this.sendMessage)
      },
      err => console.error(err),
      () => console.log('done searching'))


  }

  constructor(private service:UserService) { }

  ngOnInit(): void {
  }

}
