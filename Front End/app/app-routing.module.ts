import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MerchantListComponent } from './components/merchant-list/merchant-list.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { AddDiscountComponent } from './components/add-discount/add-discount.component';
import { AddPromocodeComponent } from './components/add-promocode/add-promocode.component';
import { AddMerchantComponent } from './components/add-merchant/add-merchant.component';
import { ShowPromocodeComponent } from './components/show-promocode/show-promocode.component';
import { ShowDiscountComponent } from './components/show-discount/show-discount.component';
import { AdminComponent } from './components/admin/admin.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CommonFeedbackComponent } from './components/common-feedback/common-feedback.component';


const routes: Routes = [
  {path: '', redirectTo: 'admin', pathMatch: 'full' },
  {path:'admin',component:AdminComponent},
  {path:'addDiscount',component:AddDiscountComponent},
  {path:'addPromocode',component:AddPromocodeComponent},
  {path:'addMerchant',component:AddMerchantComponent},
  {path:'showCustomer',component:CustomerListComponent},
  {path:'showMerchant',component:MerchantListComponent},
  {path:'showPromocode',component:ShowPromocodeComponent},
  {path:'showDiscount',component:ShowDiscountComponent},
  {path:'showProduct',component:ProductListComponent},
  {path:'PendingFeedbacks',component:CommonFeedbackComponent}
  /**/

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
