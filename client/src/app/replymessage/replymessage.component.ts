import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service.client";

@Component({
  selector: 'app-replymessage',
  templateUrl: './replymessage.component.html',
  styleUrls: ['./replymessage.component.css']
})
export class ReplymessageComponent implements OnInit {
  id: string;
  newReceiver: string;
  newSender:string;
  text:string;
  now: Date = new Date();
  constructor(private service: UserService) {

    setInterval(() => {
      this.now = new Date();
    }, 1);

  }



  reply() {
    this.service.findMessageByID(this.id).subscribe(
      message => {
        this.newReceiver = message[0].sender;
        this.newSender =message[0].receiver;
      },
      err => console.error(err),
      () => this.service.createMessage({
        sender:this.newSender,
        receiver:this.newReceiver,
        text:this.text,
        time:this.now
      })
    )
  }

  ngOnInit(): void {


  }

}
