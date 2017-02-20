import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import {Common} from  './../model/common';
@Injectable()
export class candidateService {
    private headers = new Headers({ 'Content-Type': 'application/json' });
    private url='http://localhost:3000/data';
    constructor(private http: Http) { };
    getCandidate():Promise<Common[]>{
        debugger;
       return this.http.get(this.url)
               .toPromise()
               .then(response=>response.json() as Common[])
            .catch(this.handleError);
          
    }
    // private getData(response:Response):Promise<Common[]>{
    //  let body = response.json() ;
    //   return body as Promise<Common[]>;
    // }
    private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
  
}