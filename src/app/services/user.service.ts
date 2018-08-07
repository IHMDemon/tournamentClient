import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import {Subject} from 'rxjs/Subject';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  invokeEvent:Subject<any> = new Subject();

  constructor(public myhttp: Http) { }

  handleError(e) {
     return Observable.throw(e.json().message);
  }

  tellNavToCheckLogin(theEventCallFromUserService) {
    this.invokeEvent.next({theEventCallFromUserService:theEventCallFromUserService})
}



  createUser(theNewUser) {
    return this.myhttp.post(`http://localhost:3000/api/signup`, theNewUser, {withCredentials: true})
      .map(res => res.json())
      .catch(this.handleError);

  }
  loginUser(theUserToLogIn) {
    return this.myhttp.post(`http://localhost:3000/api/login`, theUserToLogIn, {withCredentials: true})
    .map((res)=>{
      this.tellNavToCheckLogin(res);
      res.json();
    })
    .catch(this.handleError);

  }

  checkIfLoggedIn() {
    return this.myhttp.get('http://localhost:3000/api/loggedin', {withCredentials: true})
    .map((res)=> {
      return JSON.parse((<any>res)._body);

    })

    .catch(this.handleError);
  }



  logoutUser() {                                              //WE NEED THIS EMPTY BRACKET TO LOGOUT
    return this.myhttp.post(`http://localhost:3000/api/logout`, {}, {withCredentials: true})
    .map((res)=>{
      this.tellNavToCheckLogin(res);
      res.json();
    })
      .catch(this.handleError);
  }



  // updateTournament
  // deleteTeam(){
  // }

























}
