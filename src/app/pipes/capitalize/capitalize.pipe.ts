import { Pipe, PipeTransform } from '@angular/core';
import { StringUtils } from 'src/app/utils/string-utils';

@Pipe({
  name: 'capitalize',
})
export class CapitalizePipe implements PipeTransform {
  transform(value: string): string {
    return StringUtils.capilatize(value);
  }
}
