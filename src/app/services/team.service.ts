import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private myHttp: Http) { }

  handleError(e) {
    console.log(e);
     return Observable.throw(e.json().message);
  }


  getteams(){
    return this.myHttp.get('http://localhost:3000/api/tournament/teamlist')
    .map((res)=> res.json())
  }


  createTeam(theWholeEntryObject){
    return this.myHttp.post('http://localhost:3000/api/team/creation', theWholeEntryObject,{withCredentials: true})
    .map(res=>res.json());
  }

  updateTeam(theIdOfTheEntry){
    console.log("a team gets edited: ===========>", theIdOfTheEntry)
    return this.myHttp.post(`http://localhost:3000/api/team/` + theIdOfTheEntry,{withCredentials: true})
    .map((res)=> res.json())
  }
  // getOneteam(theIdOfTheEntry){
  //   return this.myHttp.get('http://localhost:3000/api/team/'+theIdOfTheEntry,{withCredentials: true})
  //   .map((res)=> res.json())

  // }

   
  // updateTeam(theIdOfTheEntry){
  //   return this.myHttp.post('http://localhost:3000/api/team/'+theIdOfTheEntry,{withCredentials: true})
  //   .map((res)=> res.json())
  // }
  // delete 

}