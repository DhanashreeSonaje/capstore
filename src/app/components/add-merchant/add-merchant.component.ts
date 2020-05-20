import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-merchant',
  templateUrl: './add-merchant.component.html',
  styleUrls: ['./add-merchant.component.css']
})
export class AddMerchantComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  back()
  {
    
    this.router.navigate(['admin']);
    }
}
