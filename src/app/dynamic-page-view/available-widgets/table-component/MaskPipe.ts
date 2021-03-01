import {Pipe, PipeTransform} from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'format'
})

export class MaskPipe implements PipeTransform {
  transform(value: any, ...args): any {
    if (moment(value, moment.ISO_8601, true).isValid()) {
      return moment(value).format(args[0]); // ('L');
    }
    return value;
  }
}
