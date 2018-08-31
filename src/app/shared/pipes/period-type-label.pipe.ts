import { Pipe, PipeTransform } from '@angular/core';
import { COURSE_CHARGE_TYPE_OPTS } from '../../app.constant';

@Pipe({
  name: 'periodTypeLabel'
})
export class PeriodTypeLabelPipe implements PipeTransform {

  courseChargeTypes = COURSE_CHARGE_TYPE_OPTS;

  transform(value: any, args?: any): any {
    try {
      const period = this.courseChargeTypes.filter(courseChargeType => courseChargeType.value === value);
      return period[0].label;
    } catch (error) {
      console.log(error);
      return value;
    }
  }
}
