import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any, filterString: any, raisedToggle: boolean, endTimeToggle: boolean): any {

    if (value === undefined) {
      return value;
    }

    const results = [];

    for (const item of value) {

      if (item.funding_type === filterString || filterString === "all") {
        results.push(item);
      }
    }

    if (raisedToggle != null) {
      results.sort((item1, item2) => {
        if (item1.raised < item2.raised) {
          return raisedToggle ? 1 : -1;
        } else if (item1.raised > item2.raised) {
          return raisedToggle ? -1 : 1;
          ;
        } else {
          return 0;
        }
      });
    }

    if (endTimeToggle != null) {
      results.sort((item1, item2) => {

        const d1 = Date.parse(item1.end_time);
        const d2 = Date.parse(item2.end_time);

        if (d1 < d2) {
          return endTimeToggle ? 1 : -1;
        } else if (d1 > d2) {
          return endTimeToggle ? -1 : 1;
          ;
        } else {
          return 0;
        }
      });
    }

    return results;

  }

}
