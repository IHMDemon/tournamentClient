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

  signup(user) {
    return this.http.post('http://localhost:3000/api/signup', user, {withCredentials: true})
    .toPromise()
    .then((apiResult: any) => {
      return apiResult;
    })
  }


  login(user) {
    return this.http.post('http://locahost:3000/api/login', user, {withCredentials: true})
    .map(res => res.json())
    .catch(this.handleError);
  }

  logout() {
    return this.http.post('http://localhost:3000/api/logout', {withCredentials: true})
    .map(res => res.json())
    .catch(this.handleError);
  }

  isLoggedIn(){
    return this.http.get('http://localhost:3000/api/loggedin', {withCredentials: true})
    .map(res => {
      console.log(res);
      return JSON.parse((<any>res)._body)
    })
    .catch(this.handleError);
  }


















} //END class userService
