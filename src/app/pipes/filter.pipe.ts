import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultPosts = [];
    for ( const producto of value) {
      if ( producto?.nombre.indexOf( arg ) > -1) {
        resultPosts.push( producto )
      }
    }
    return resultPosts;
  }

}
