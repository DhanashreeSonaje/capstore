import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/Product';

@Pipe({
  name: 'filterProduct'
})
export class FilterProductPipe implements PipeTransform {

  transform(products:Product[], SearchTerm:String): Product[] {
    if(!products || !SearchTerm)
    {
      return products;
    }
    return products.filter(product=>product.productName.toLocaleLowerCase().match(SearchTerm.toLocaleLowerCase()));
  }
}
