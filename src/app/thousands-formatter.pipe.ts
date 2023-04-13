import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'thousandsFormatter'
})
export class ThousandsFormatterPipe implements PipeTransform {
  transform(value: number): string {
    const result = value / 1000.0;
    const strResult = result.toFixed(2) + 'k';

    return strResult;
  }
}
