import {Store} from "./store.model.client";

export class Review {
  _id:string;
  review_id:string;
  user_id: string;
  business_id:Store;
  stars: number;
  useful: number;
  funny:number;
  cool:number;
  text:string;
  date:string;
}
