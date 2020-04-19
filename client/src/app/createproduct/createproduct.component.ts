import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service.client'
@Component({
  selector: 'app-createproduct',
  templateUrl: './createproduct.component.html',
  styleUrls: ['./createproduct.component.css']
})
export class CreateproductComponent implements OnInit {

  store_id:string;
  name:string;
  description:string;
  prize:number;
  brand:string;
  store:"";

  constructor(private service:ProductService) { }

  createProduct(){
    const newProduct = {
      store_id:this.store_id,
      name:this.name,
      description:this.description,
      prize:this.prize,
      brand:this.brand,
      store:this.store
  }
  this.service.createProduct(newProduct)


  }

  ngOnInit(): void {
  }

}
