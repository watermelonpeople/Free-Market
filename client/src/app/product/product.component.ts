import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../services/product.service.client";
import {Product} from "../../models/product.model.client";
import {StoreService} from "../../services/store.service.client";
import {Store} from "../../models/store.model.client";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[];
  stores:Store[] = [];
  store:Store;
  constructor(private service: ProductService) {
  }

  searchForAll() {
    this.service.findAllProduct().subscribe(
      products =>
      {
        this.products = products;
        // for (let i = 0; i < this.products.length; i++) {
        //   this.service.findStoreByStoreId(this.products[i].store).subscribe(store =>this.stores.push(store),
        //     err => console.error(err),
        //     () => console.log(this.products[i].name+this.stores[i].name))
        // }
      }
      ,
      err => console.error(err),
      () => console.log('done searching'));


  }

  ngOnInit(): void {
  }

}
