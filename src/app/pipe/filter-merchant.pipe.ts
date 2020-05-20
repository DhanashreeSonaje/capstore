import { Pipe, PipeTransform } from '@angular/core';
import { MerchantDetails } from '../models/MerchantDetails';

@Pipe({
  name: 'filterMerchant'
})
export class FilterMerchantPipe implements PipeTransform {

  transform(merchants:MerchantDetails[], SearchTerm:String): MerchantDetails[] {
    if(!merchants || !SearchTerm)
    {
      return merchants;
    }
    return merchants.filter(merchant=>merchant.name.toLocaleLowerCase().match(SearchTerm.toLocaleLowerCase()));
  }

}
