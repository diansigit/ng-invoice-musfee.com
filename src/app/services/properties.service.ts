import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../shared/services';
import { BASE_API_URL } from '../app.constant';

export enum PropertyType {
  COST,
  COURSE,
  DAY,
  QRCODE,
  ROOM,
  SESSION
}

const endpoint = {
  cost: BASE_API_URL + '/assets/data/costs.json',
  course: BASE_API_URL + '/assets/data/courses.json',
  day: BASE_API_URL + '/assets/data/students.json',
  qrcode: BASE_API_URL + '/assets/data/students.json',
  room: BASE_API_URL + '/assets/data/rooms.json',
  session: BASE_API_URL + '/assets/data/sessions.json'
};

@Injectable({
  providedIn: 'root'
})
export class PropertiesService {

  private getServiceUrl(type): string {
    let url: string;

    switch (type) {
      case PropertyType.COST:
        url = endpoint.cost;
        break;

      case PropertyType.COURSE:
        url = endpoint.course;
        break;

      case PropertyType.DAY:
        url = endpoint.day;
        break;

      case PropertyType.QRCODE:
        url = endpoint.qrcode;
        break;

      case PropertyType.ROOM:
        url = endpoint.room;
        break;

      default:
        url = endpoint.session;
        break;
    }

    return url;
  }

  constructor(private httpSvc: HttpService) { }

  read(type, params?): Observable<any> {
    return this.httpSvc.get(this.getServiceUrl(type), params);
  }

}
