import {Store} from "./store.model.client";

export class Product {
  _id:string;
  name:string;
  description:string;
  prize:number;
  brand:string;
  store:Store;
}
