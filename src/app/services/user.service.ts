import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Rx';


@Injectable({
  providedIn: 'root'
})
export class UserService {


  theError: any;

  constructor(public http: Http) { }


  handleError(e){
    return Observable.throw(e.json().message);
  }

























}
