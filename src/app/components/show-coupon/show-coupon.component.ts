import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Coupon } from '../../Model/Coupon.model';
import { CapstoreService } from '../../service/capstore.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-coupon',
  templateUrl: './show-coupon.component.html',
  styleUrls: ['./show-coupon.component.css']
})
export class ShowCouponComponent implements OnInit {

  coupon: Observable<Coupon[]>;
  couponId:number;
  couponCode:string;
  submitted=false;
  error=null;
  subId=true;
  subCode=true;
  no:number;
  coupon1: Coupon = new Coupon();
  isApproved= false;
  email:string;
  userId:number;

  constructor(private capstoreService: CapstoreService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.route.params.subscribe(params => {
      console.log(params);
      this.couponId=params['couponId'];
      console.log(this.couponId);

      this.userId=params['userId'];
      console.log(this.userId);
      
   }
   
   ); 
    this.capstoreService.getCouponById(this.couponId, this.coupon)
    .subscribe((data) => {
      console.log(data)
      this.coupon1=data;
    })
  }

  acceptCoupon(couponId,userId) {
    console.log("Accept");
    alert("Coupon Accepted..");
    console.log(this.couponId);
    console.log(this.userId);
    this.isApproved=true;
    this.couponId=couponId;
    this.userId=userId;
    this.capstoreService.getCoupon(this.couponId,this.userId,this.coupon1)
    .subscribe(data =>{ this.coupon1=data
      console.log(data)});
  }

  rejectMerchant(couponId,userId) {
    console.log("Reject");
    this.isApproved=false;
    this.email=this.email;
    this.capstoreService.getCoupon(couponId,userId,this.coupon1)
    .subscribe(data =>{ this.coupon1=data
      console.log(data)});
  }

  searchById(){
    this.subId=false;
    this.subCode=true;
  }

  searchByCode(){
    this.subId=true;
    this.subCode=false;
  }

  
    back() {
      this.submitted=false;
      this.subId=true;
      this.subCode=true;
    }
}
