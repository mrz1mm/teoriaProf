import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cut'
})
export class CutPipe implements PipeTransform {


  transform(value: string, length: number = 50): string {
    return value.substring(0,length) + '...';
  }

}
