import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../app/home/home.component';
import { LoginComponent } from '../app/login/login.component';
import { RegisterComponent } from '../app/register/register.component';
import { UserComponent } from '../app/user/user.component';
import { ReviewResearchComponent } from '../app/review-research/review-research.component'
import { UserByUsernameComponent } from '../app/user-by-username/user-by-username.component'
import { BusinessComponent } from '../app/business/business.component'
import { ProfileComponent } from '../app/profile/profile.component'
import { UserDeleteComponent } from '../app/user-delete/user-delete.component'
import { ProductComponent } from '../app/product/product.component'
import { ProfileforsellerComponent } from '../app/profileforseller/profileforseller.component'
import { CreatestoreComponent } from "./createstore/createstore.component"
import { ProfileforcustomerComponent } from './profileforcustomer/profileforcustomer.component'
import { UpdateprofileComponent } from './updateprofile/updateprofile.component'
import { GetIdComponent } from './get-id/get-id.component'
import { BusinessforsellerComponent } from './businessforseller/businessforseller.component'
import { CreateproductComponent} from './createproduct/createproduct.component'
import {ProductforsellerComponent} from "./productforseller/productforseller.component";
import {CreatereviewComponent} from "./createreview/createreview.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'allUser', component: UserComponent },
  { path: 'review', component: ReviewResearchComponent },
  { path: 'userByUN', component: UserByUsernameComponent },
  { path: 'forBusiness', component: BusinessComponent},
  { path: 'profile',component: ProfileComponent },
  { path: 'userDelete',component: UserDeleteComponent },
  { path: 'product',component: ProductComponent },
  { path: 'profileforseller', component:ProfileforsellerComponent},
  { path: 'createStore', component: CreatestoreComponent},
  { path: 'profileforcustomer',component: ProfileforcustomerComponent},
  { path: 'updateprofile', component: UpdateprofileComponent},
  { path: 'gettheid', component: GetIdComponent},
  { path: 'businessForSeller',component: BusinessforsellerComponent },
  { path: 'createProduct' ,component: CreateproductComponent},
  { path: 'productForSeller' ,component: ProductforsellerComponent},
  { path: 'createReview', component: CreatereviewComponent}
  // // otherwise redirect to home
  // { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);
