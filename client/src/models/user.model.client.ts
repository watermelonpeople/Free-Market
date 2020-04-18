import {Phone} from './phone.model.client'
import {Address} from './address.model.client'
export class User {
  _id:string;
  firstname:string;
  lastname: string;
  username: string;
  type:string;
  email: string;
  password: string;
  phone:[
    Phone
  ];
  addressSchema:[
    Address
  ]
}
