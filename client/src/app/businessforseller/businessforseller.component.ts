import {Component, OnInit} from '@angular/core';
import {StoreService} from '../../services/store.service.client'
import { Store } from '../../models/store.model.client'
@Component({
  selector: 'app-businessforseller',
  templateUrl: './businessforseller.component.html',
  styleUrls: ['./businessforseller.component.css']
})
export class BusinessforsellerComponent implements OnInit {

  userId: string;
  stores:Store[];
  constructor(private service: StoreService) {
  }

  showSellerStore() {
    this.service.findStoreById(this.userId).subscribe(
      stores => {this.stores = stores},
      err => console.error(err),
      () => console.log('done searching'+this.stores.length));
  }


  ngOnInit(): void {
  }

}
