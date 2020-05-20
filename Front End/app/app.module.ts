import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MerchantListComponent } from './components/merchant-list/merchant-list.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { AdminComponent } from './components/admin/admin.component';
import { AddMerchantComponent } from './components/add-merchant/add-merchant.component';
import { AddDiscountComponent } from './components/add-discount/add-discount.component';
import { AddPromocodeComponent } from './components/add-promocode/add-promocode.component';
import { ShowDiscountComponent } from './components/show-discount/show-discount.component';
import { ShowPromocodeComponent } from './components/show-promocode/show-promocode.component';
import { FilterCustomerPipe } from './pipe/filter-customer.pipe';
import { FilterMerchantPipe } from './pipe/filter-merchant.pipe';
import { FilterProductPipe } from './pipe/filter-product.pipe';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CommonFeedbackComponent } from './components/common-feedback/common-feedback.component';




@NgModule({
  declarations: [
    AppComponent,
    MerchantListComponent,
    CustomerListComponent,
    AdminComponent,
    AddMerchantComponent,
    AddDiscountComponent,
    AddPromocodeComponent,
    ShowDiscountComponent,
    ShowPromocodeComponent,
    FilterCustomerPipe,
    FilterMerchantPipe,
    FilterProductPipe,
    ProductListComponent,
    CommonFeedbackComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
