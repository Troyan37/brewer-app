import { Pipe, PipeTransform } from '@angular/core';
import { Beer } from './shared/beer.model';

@Pipe({
  name: 'sortBy',
  pure: false
})
export class SortByPipe implements PipeTransform {

  transform(list: Beer[], arg: string): Beer[] {

   if(arg === "name"){
    
    list.sort( (a,b) => {
        if(a.name < b.name){
          return -1;
         }
         else if (a.name < b.name){
           return 1;
        }
         else {
           return 0;
        }
    })

    } else if(arg === "type") {

      list.sort( (a,b) => {
        if(a.type < b.type){
          return -1;
         }
         else if (a.type < b.type){
           return 1;
        }
         else {
           return 0;
        }
    })

    }else if(arg === "price"){

      list.sort( (a,b) => {
        return parseInt(a.price) - parseInt(b.price);
    })
  }
  
  return list;
  }
}