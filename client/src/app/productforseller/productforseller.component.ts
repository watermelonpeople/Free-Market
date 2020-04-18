import {Component, OnInit} from '@angular/core';
import {StoreService} from "../../services/store.service.client";
import {Store} from "../../models/store.model.client";
import {Product} from "../../models/product.model.client";

@Component({
  selector: 'app-productforseller',
  templateUrl: './productforseller.component.html',
  styleUrls: ['./productforseller.component.css']
})
export class ProductforsellerComponent implements OnInit {

  constructor(private service: StoreService) {
  }
  products:Product[] = [];
  userId: string;
  stores: Store[];
  searchForProduct() {
    this.service.findStoreById(this.userId).subscribe(
      stores => {this.stores = stores;
      console.log(stores)},
      //   for (let i = 0; i < this.stores.length; i++) {
      //     this.service.findProductByStoreId(this.stores[i]._id).subscribe(products => {
      //       this.products_t = products
      //       for(let j =0; j<this.products_t.length;j++){
      //         this.products.push(this.products_t[j])
      //       }
      //     },
      //       err => console.error(err),
      //       () => console.log('done searching'))
      //   }
      //
      // },

      err => console.error(err),
      () => console.log('done searching'+this.stores.length));
  }

  ngOnInit(): void {
  }

}
