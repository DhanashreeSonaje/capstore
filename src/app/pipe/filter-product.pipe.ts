import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../Model/Product';

@Pipe({
  name: 'filterProduct'
})
export class FilterProductPipe implements PipeTransform {

  
 
  transform(value: any, args?: any): any {

    if(!value)return null;
    if(!args)return value;

    args = args.toLowerCase();

    return value.filter(function(item){
      alert(JSON.stringify(item).toLowerCase().includes(args));
        return JSON.stringify(item).toLowerCase().includes(args);
    });
}
 
}
