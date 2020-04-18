import { Component, OnInit } from '@angular/core';
import { Review } from '../../models/review.model.client';
import { ReviewService } from '../../services/review.service.client';
import {Store} from "../../models/store.model.client";
@Component({
  selector: 'app-review-research',
  templateUrl: './review-research.component.html',
  styleUrls: ['./review-research.component.css']
})
export class ReviewResearchComponent implements OnInit {
  id: string;
  review:Review;
  stores:Store[];
  storeName:string;
  reviewId:string[] = [];
  text:string[] = [];
  stars:number[] = [];
  search (){
    this.service
      .findReviewById(this.id).subscribe(
      review => {this.review = review},
      err => console.error(err),
      () => console.log('done searching')
    )
  }

  searchTwo(){
    this.service.findStoreByName(this.storeName).subscribe(
      store => {for(let i =0; i<store[0].reviews.length;i++){
        this.reviewId.push(store[0].reviews[i])
      }},
      err => console.error(err),
      () =>{ for(let i =0; i<this.reviewId.length;i++){
        this.service.findReviewById(this.reviewId[i]).subscribe(
          review => {
            this.text.push(review.text);
            this.stars.push(review.stars);
          },
          err => console.error(err),
          () => console.log('done searching')
        )
      }
      }
    )
  }


  constructor(
    private service: ReviewService
  ) { }

  ngOnInit(): void {
  }

}
