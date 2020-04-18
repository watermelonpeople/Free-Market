import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../services/store.service.client'
import { Store } from '../../models/store.model.client'
@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {
  constructor(private service:StoreService) { }
  name:string;
  category:string;
  city:string;
  stores:Store[];


  search(){
    this.service.findStoreByName(this.name).subscribe(
      stores => {this.stores = stores},
      err => console.error(err),
      () => console.log('done searching'+this.stores.length));

  }

 searchTwo(){
    this.service.findStoreByCategory(this.category).subscribe(
      stores => {this.stores = stores},
      error => console.log(error),
      () => console.log("Done searching")
    )
 }

  searchThree(){
    this.service.findStoreByCity(this.city).subscribe(
      stores => {this.stores = stores},
      error => console.log(error),
      () => console.log("Done searching")
    )
  }

  ngOnInit(): void {
  }

}
