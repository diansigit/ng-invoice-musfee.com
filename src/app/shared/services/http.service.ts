import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private httpClient: HttpClient
  ) { }

  /**
   * @method get()
   * @description
   * @author diansigitp
   * @param {string} url
   * @param {*} [params]
   * @returns
   * @memberof HttpService
   */
  get(url: string, params?: any) {
    let httpParams: HttpParams;
    if (params) {
        httpParams = Object.getOwnPropertyNames(params)
        .reduce((p, key) => p.set(key, params[key]), new HttpParams());
    }

    return this.httpClient.get(url, { params: httpParams });
  }

  /**
   * @method post()
   * @description
   * @author diansigitp
   * @param {string} url
   * @param {*} [body]
   * @param {boolean} [formDataMode]
   * @returns
   * @memberof HttpService
   */
  post(url: string, body?: any, formDataMode?: boolean) {
    return this.httpClient.post(url, body);
  }

  /**
   * @method put()
   * @description
   * @author diansigitp
   * @param {string} url
   * @param {*} [body]
   * @returns
   * @memberof HttpService
   */
  put(url: string, body?: any) {
    return this.httpClient.put(url, body);
  }

  /**
   * @method delete()
   * @description
   * @author diansigitp
   * @param {string} url
   * @param {*} [body]
   * @returns
   * @memberof HttpService
   */
  delete(url: string, params?: any) {
    let httpParams: HttpParams;
    if (params) {
        httpParams = Object.getOwnPropertyNames(params)
        .reduce((p, key) => p.set(key, params[key]), new HttpParams());
    }

    return this.httpClient.delete(url, { params: httpParams });
  }
}
