import {Pipe, PipeTransform} from '@angular/core';
@Pipe({
  name: 'image'
})
export class DefaultImage implements PipeTransform {
  transform(src: string): string {
    if(!src){
      return 'https://static.kundo.se/static/images/avatar-default.png';
    } else{
      return src;
    }
  }
}
