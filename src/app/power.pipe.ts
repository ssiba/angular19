import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'power'
})
export class PowerPipe implements PipeTransform {

  transform(value: number, exponent: number = 1): number {
    if (typeof value !== 'number' || isNaN(value)) {
      // Handle cases where the input is not a valid number
      return NaN; // Or throw an error, or return a default value
    }
    return Math.pow(value, exponent);
  }
}
