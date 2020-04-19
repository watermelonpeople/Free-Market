import { Component, OnInit } from '@angular/core';
import { Review } from '../../models/review.model.client';
import { ReviewService } from '../../services/review.service.client';

@Component({
  selector: 'app-reviewforcustomer',
  templateUrl: './reviewforcustomer.component.html',
  styleUrls: ['./reviewforcustomer.component.css']
})
export class ReviewforcustomerComponent implements OnInit {

  id:string;
  reviews:Review[];
  search(){
    this.service.findReviewByUserId(this.id).subscribe(
      reviews => {this.reviews = reviews},
      err => console.error(err),
      () => console.log('done searching')
    )
  }


  constructor(private service:ReviewService) { }

  ngOnInit(): void {
  }

}
