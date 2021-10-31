import { Pipe, PipeTransform } from '@angular/core';
import { StringUtils } from 'src/app/utils/string-utils';

@Pipe({
  name: 'capitalizeForEach',
})
export class CapitalizeForEachPipe implements PipeTransform {
  transform(value: string): string {
    return value.split(' ').map(StringUtils.capilatize).join(' ');
  }
}
