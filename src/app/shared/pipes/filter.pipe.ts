import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, propName: string): any {
    if (!value || value.length === 0 || filterString === '') {
      return value;
    }
    const resultArray = [];
    if(value) {
      for (const item of value) {
        if (item[propName].includes(filterString)) {
          resultArray.push(item);
        }
      }
    }
    return resultArray;
  }

}
