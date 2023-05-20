import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sqart'
})
export class SqartPipe implements PipeTransform {

  transform(val:number): number {
    return Math.sqrt(val);
  }

}
