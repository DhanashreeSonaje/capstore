import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Coupon } from '../models/Coupon';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  baseUrl="http://localhost:9091/admin/customer";
  baseUrlMerchant="http://localhost:9091/admin/merchant";
  baseUrlProduct="http://localhost:9091/admin/products";
  constructor(private http:HttpClient) { }

  //------------------------------------------------user-----------------------------------------------------------------------------------------------------------------

  getAllUser():Observable<any>
  {
    return this.http.get(`${this.baseUrl}`).pipe(catchError(this.handleError) );
  }
  deleteUser(Cust_ID:number)
  {
    return this.http.delete(`${this.baseUrl}/${Cust_ID}`).pipe(catchError(this.handleError));
  }
 


  //------------------------------------------------Merchant----------------------------------------------------------------------------------------------
  getAllMerchant():Observable<any>
  {
    return this.http.get(`${this.baseUrlMerchant}`).pipe(catchError(this.handleError) );
  }
  deleteMerchant(merchant_ID:number)
  {
    return this.http.delete(`${this.baseUrlMerchant}/${merchant_ID}`).pipe(catchError(this.handleError));
  }
  //------------------------------------------------Product------------------------------------------------------------------------------------------------
  
  getAllProducts():Observable<any>
  {
    return this.http.get(`${this.baseUrlProduct}`).pipe(catchError(this.handleError));
  }
  deleteProduct(productID:number):Observable<any>
  {
    return this.http.delete(`${this.baseUrlProduct}/${productID}`);
  }
  
  
  //------------------------------------------------Promocode----------------------------------------------------------------------------------------------
  
  addPromocode(Coupon:Object) :Observable<Object>
    {

         return this.http.post(`${this.baseUrl}`,Coupon).pipe(catchError(this.handleError));
    }

  getPromocodes():Observable<any>
    {
          return this.http.get(`${this.baseUrl}`);
    }

  deletePromocode(promocodeId:number)
    {
     return this.http.delete(`${this.baseUrl}/${promocodeId}`);
   }
  
  
  //------------------------------------------------Discount----------------------------------------------------------------------------------------------
 
   
  
  //------------------------------------------------Error Handling--------------------------------------------------------
  handleError(error) {
    let errorMessage='';
    let msg='';
    if(error.error instanceof ErrorEvent)
    {
       
        errorMessage=`${error.errorMessage}`;
        console.log("Client Side");
    }
    else{

 
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      console.log("Server SIde");

    }
    console.log(errorMessage);
    return throwError(error);
  }

}
