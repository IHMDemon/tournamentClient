import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
=======
import { Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Rx';

>>>>>>> 91acd0f4469db625e4c6449b138ec3bf4fe18d89

@Injectable({
  providedIn: 'root'
})
export class UserService {

<<<<<<< HEAD
  constructor(public myhttp: Http) { }

  handleError(e) {
    console.log(e);
     return Observable.throw(e.json().message);
  }

  createUser(theNewUser) {
    return this.myhttp.post(`http://localhost:3000/api/signup`, theNewUser, {withCredentials: true})
      .map(res => res.json())
      .catch(this.handleError);
  }

  // updateTournament
  // deleteTeam(){
  // }
}
=======
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
>>>>>>> 91acd0f4469db625e4c6449b138ec3bf4fe18d89
