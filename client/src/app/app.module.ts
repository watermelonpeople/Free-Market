import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ReviewService} from '../services/review.service.client';
import {AppComponent} from './app.component';
import {ReviewResearchComponent} from './review-research/review-research.component';
import {FormsModule} from '@angular/forms';
import {UserComponent} from './user/user.component';
import {UserService} from '../services/user.service.client';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { appRoutingModule } from './app.routing';
import { UserByUsernameComponent } from './user-by-username/user-by-username.component';
import { BusinessComponent } from './business/business.component'
import { StoreService } from '../services/store.service.client';
import { ProfileComponent } from './profile/profile.component';
import { UserDeleteComponent } from './user-delete/user-delete.component';
import { ProfileforsellerComponent } from './profileforseller/profileforseller.component';
import { ProductComponent } from './product/product.component';
import { ProfileforcustomerComponent } from './profileforcustomer/profileforcustomer.component';
import { CreatestoreComponent } from './createstore/createstore.component';
import { CreateproductComponent } from './createproduct/createproduct.component';
import { UpdateprofileComponent } from './updateprofile/updateprofile.component';
import { GetIdComponent } from './get-id/get-id.component';
import { BusinessforsellerComponent } from './businessforseller/businessforseller.component';
import {ProductService} from "../services/product.service.client";
import { ProductforsellerComponent } from './productforseller/productforseller.component';
import { CreatereviewComponent } from './createreview/createreview.component';
import { ReviewforcustomerComponent } from './reviewforcustomer/reviewforcustomer.component';
import { ReviewforsellerComponent } from './reviewforseller/reviewforseller.component';
import { CreatemessageComponent } from './createmessage/createmessage.component';
import { ShowmymessagesComponent } from './showmymessages/showmymessages.component';
import { ReplymessageComponent } from './replymessage/replymessage.component';
import { CreateuserComponent } from './createuser/createuser.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { CreateSubProductComponent } from './create-sub-product/create-sub-product.component';

@NgModule({
  declarations: [
    AppComponent,
    ReviewResearchComponent,
    UserComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    UserByUsernameComponent,
    BusinessComponent,
    ProfileComponent,
    UserDeleteComponent,
    ProfileforsellerComponent,
    ProductComponent,
    ProfileforcustomerComponent,
    CreatestoreComponent,
    CreateproductComponent,
    UpdateprofileComponent,
    GetIdComponent,
    BusinessforsellerComponent,
    ProductforsellerComponent,
    CreatereviewComponent,
    ReviewforcustomerComponent,
    ReviewforsellerComponent,
    CreatemessageComponent,
    ShowmymessagesComponent,
    ReplymessageComponent,
    CreateuserComponent,
    UpdateuserComponent,
    CreateSubProductComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    appRoutingModule,
    HttpClientModule
  ],
  providers: [ReviewService,
    UserService,
    StoreService,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
