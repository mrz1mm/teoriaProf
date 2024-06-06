import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'idfy'
})
export class IdfyPipe implements PipeTransform {

  transform(value: number, prefix: string): string {
    return `${prefix}_${value}`;
  }

}
