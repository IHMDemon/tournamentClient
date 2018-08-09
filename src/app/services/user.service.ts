import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import {Subject} from 'rxjs/Subject';
//YOU NEED PROD TO DO THE ENVIRONMENT VARIABLE. IT KNOWS WHICH ONE TO USE DURING PRODUCTION AUTOMATICALLY
import {environment} from '../../environments/environment'

//CHANGING ROUTES.

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  invokeEvent:Subject<any> = new Subject();

  constructor(public myhttp: Http) { }

  //linke variable.
  baseUrl: any = environment.url_base;

  handleError(e) {
     return Observable.throw(e.json().message);
  }

  tellNavToCheckLogin(theEventCallFromUserService) {
    this.invokeEvent.next({theEventCallFromUserService:theEventCallFromUserService})
}





  createUser(theNewUser) {
    return this.myhttp.post(`${this.baseUrl}/api/signup`, theNewUser, {withCredentials: true})
      .map(res => res.json())
      .catch(this.handleError);

  }
  loginUser(theUserToLogIn) {
    return this.myhttp.post(`${this.baseUrl}/api/login`, theUserToLogIn, {withCredentials: true})
    .map((res)=>{
      this.tellNavToCheckLogin(res);
      res.json();
    })
    .catch(this.handleError);

  }

  checkIfLoggedIn() {
    return this.myhttp.get(`${this.baseUrl}/api/loggedin`, {withCredentials: true})
    .map((res)=> {
      return JSON.parse((<any>res)._body);

    })

    .catch(this.handleError);
  }


  getJustOneUser(theIdOfTheUser){
    return this.myhttp.get(`${this.baseUrl}/api/profile/${theIdOfTheUser}`)
    .map((res)=> res.json());
  }


  logoutUser() {                                              //WE NEED THIS EMPTY BRACKET TO LOGOUT
    return this.myhttp.post(`${this.baseUrl}/api/logout`, {}, {withCredentials: true})
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
