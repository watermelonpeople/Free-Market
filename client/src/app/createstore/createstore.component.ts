import {Component, OnInit} from '@angular/core';
import {StoreService} from '../../services/store.service.client';

@Component({
  selector: 'app-createstore',
  templateUrl: './createstore.component.html',
  styleUrls: ['./createstore.component.css']
})
export class CreatestoreComponent implements OnInit {
  user_id:string;
  business_id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  postal_code: string;
  attribute: string;
  categories: string;
  Monday: string;
  Tuesday: string;
  Wednesday: string;
  Thursday: string;
  Friday: string;
  Saturday: string;
  Sunday: string;

  constructor(private service: StoreService) {
  }

  createStore() {
    const newStore ={
      user_id:this.user_id,
      business_id: this.business_id,
      name: this.name,
      address: this.address,
      city: this.city,
      state: this.state,
      postal_code: this.postal_code,
      stars: 0,
      review_count: 0,
      attribute: this.attribute,
      categories: this.categories,
      forHours: {
        Monday: this.Monday,
        Tuesday: this.Tuesday,
        Wednesday: this.Wednesday,
        Thursday: this.Thursday,
        Friday: this.Friday,
        Saturday: this.Saturday,
        Sunday: this.Sunday
      }
    }
    this.service.createStore(newStore)
  }

  ngOnInit(): void {
  }

}
