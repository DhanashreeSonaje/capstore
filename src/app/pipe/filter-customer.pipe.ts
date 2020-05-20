import { Pipe, PipeTransform } from '@angular/core';
import { CustomerDetails } from '../models/CustomerDetails';

@Pipe({
  name: 'filterCustomer'
})
export class FilterCustomerPipe implements PipeTransform {

  transform(customers:CustomerDetails[], SearchTerm:any): CustomerDetails[] {
    if(!customers || !SearchTerm)
    {
      return customers;
    }
    if(typeof(SearchTerm)=="string")
    return customers.filter(customer=>customer.name.toLocaleLowerCase().match(SearchTerm.toLocaleLowerCase()));
    else if(typeof(SearchTerm)=="number")
    return customers.filter(customer=>customer.userId.valueOf()==SearchTerm);
  }


}
