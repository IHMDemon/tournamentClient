import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public myhttp: Http) { }

  handleError(e) {
    const err = e._body;
    console.log(JSON.parse((<any>e)._body))
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
