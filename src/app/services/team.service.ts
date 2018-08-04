import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class TeamService {

  constructor(private myHttp: Http) { }


  getteams(){
    return this.myHttp.get('http://localhost:3000/api/team')
    .map((res)=> res.json())
  }


  createTeam(theWholeEntryObject){
    return this.myHttp.post('http://localhost:3000/api/team',theWholeEntryObject,{withCredentials: true})
    .map((res)=>res.json());
  }

  getOneteam(theIdOfTheEntry){
    return this.myHttp.get('http://localhost:3000/api/team/'+theIdOfTheEntry,{withCredentials: true})
    .map((res)=> res.json())

  }

  //update 

  // delete 

}