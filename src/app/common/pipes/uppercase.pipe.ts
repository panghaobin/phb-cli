import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upper'
})

export class UppercasePipe implements PipeTransform {
  transform(value: string) {
    const transformValue = value.toUpperCase()
    return transformValue
  }
}