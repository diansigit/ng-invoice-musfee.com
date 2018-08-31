import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/shared/services';
import { BASE_API_URL } from './../app.constant';

const endpoint = {
    PRODUCT: BASE_API_URL + ''
};

@Injectable()
export class ProductService {

    constructor(
       private httpSvc: HttpService
    ) { }

    read(params?): Observable<any> {
        return this.httpSvc.get(endpoint.PRODUCT, params);
    }

}
