import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../services/product.service.client";

@Component({
  selector: 'app-create-sub-product',
  templateUrl: './create-sub-product.component.html',
  styleUrls: ['./create-sub-product.component.css']
})
export class CreateSubProductComponent implements OnInit {
  store_id:string;
  product_id:string;
  name:string;
  description:string;
  prize:number;
  brand:string;

  constructor(private service:ProductService) { }

  create(){
    this.service.findProductById(this.product_id).subscribe(
      product => {this.store_id = product[0].store
      },
      err => console.error(err),
      () => this.service.createSubProduct(
          {
            store_id:this.store_id,
            mainProduct_id:this.product_id,
            name:this.name,
            description:this.description,
            prize:this.prize,
            brand:this.brand,
          }
      ))

  }
  //   const newProduct =
  //   {
  //     store_id:this.store_id,
  //     mainProduct_id:this.store_id,
  //     name:this.name,
  //     description:this.description,
  //     prize:this.prize,
  //     brand:this.brand,
  //   }
  //   this.service.createSubProduct(newProduct)
  // }

  ngOnInit(): void {
  }

}
