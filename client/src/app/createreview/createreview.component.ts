import {Component, OnInit} from '@angular/core';
import {ReviewService} from "../../services/review.service.client";
import {Store} from "../../models/store.model.client";

@Component({
  selector: 'app-createreview',
  templateUrl: './createreview.component.html',
  styleUrls: ['./createreview.component.css']
})
export class CreatereviewComponent implements OnInit {
  nameOfStore: string;
  stores: Store[];
  user_id: string;
  business_id: string;
  stars: number;
  newStars: number;
  text: string;
  now: Date = new Date();

  constructor(private service: ReviewService) {
    setInterval(() => {
      this.now = new Date();
    }, 1);
  }


createReview()
{
  this.service.findStoreByName(this.nameOfStore).subscribe(store => {
      this.stores = store;
      this.business_id = this.stores[0]._id;
      this.newStars = (Number(this.stores[0].stars) + Number(this.stars)) / (Number(this.stores[0].review_count) + 1);
      this.service.createStore({
        review_id:"1",
        user_id: this.user_id,
        business_id: this.business_id,
        stars: this.newStars,
        useful: 0,
        funny:0,
        cool:0,
        text: this.text,
        date: this.now
      })
    },
    err => console.error(err),
    () => console.log('Done Searching')
  )
}

ngOnInit(): void {}

}
