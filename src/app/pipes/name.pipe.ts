import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'playerName'
})
export class NamePipe implements PipeTransform {

  transform(value: string, args?: any): string {
    const lowerCaseValue = value.toLowerCase();
    return lowerCaseValue.charAt(0).toUpperCase() + lowerCaseValue.slice(1);
  }

}
