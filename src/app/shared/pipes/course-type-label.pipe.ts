import { Pipe, PipeTransform } from '@angular/core';
import { COURSE_TYPE_OPTS } from '../../app.constant';

@Pipe({
  name: 'courseTypeLabel'
})
export class CourseTypeLabelPipe implements PipeTransform {

  courseTypes = COURSE_TYPE_OPTS;

  transform(value: any, args?: any): any {
    try {
      const course = this.courseTypes.filter(courseType => courseType.value === value);
      return course[0].label;
    } catch (error) {
      console.log(error);
      return value;
    }
  }

}
