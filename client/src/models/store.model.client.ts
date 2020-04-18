import {Product} from './product.model.client'
import { Hour } from './hour.model.client'
import {User} from "./user.model.client";
import {Review} from "./review.model.client";
export class Store {
  _id:string;
  businessId:string;
  name: string;
  address: string;
  city: string;
  state: string;
  postal_code: string;
  latitude: number;
  longitude: number;
  stars: number;
  review_count: number;
  is_open: number;
  attributes: object;
  categories: string;
  hours: Hour;
  seller:User;
  products:[
    Product
  ]
  reviews:[
    string
  ]
}
