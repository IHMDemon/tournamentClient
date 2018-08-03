import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class TeamCreationComponent {

  constructor(private myHttp: Http) { }


  getEntries(){
    return this.myHttp.get('http://localhost:3000/api/team')
    .map((res)=> res.json())
  }


  addNewEntry(theWholeEntryObject){
    return this.myHttp.post('http://localhost:3000/api/team',theWholeEntryObject)
    .map((res)=>res.json());
  }

  getOneEntry(theIdOfTheEntry){
    return this.myHttp.get('http://localhost:3000/api/team/'+theIdOfTheEntry)
    .map((res)=> res.json())

  }

}