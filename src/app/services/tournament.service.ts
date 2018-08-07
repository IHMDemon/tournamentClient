import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { RouterModule, Routes } from '@angular/router';
import 'rxjs/add/operator/map';
import { AllTeamsComponent } from '../teams/all-teams/all-teams.component';

@Injectable({
  providedIn: 'root'
})
export class TournamentService {
  serviceTeamList:Array<any> = [];
  constructor(private myhttp: Http, public allTeamsComponent:AllTeamsComponent) { }

  handleError(e) {
    console.log(e);
     return Observable.throw(e.json().message);
  }

  createTournament(theTournament) {
    console.log("tournament created: =============>",theTournament)
    return this.myhttp.post(`http://localhost:3000/api/tournament/create`, theTournament, {withCredentials: true})
      .map(res => res.json())
  }

  updateTeam(theIdOfTheEntry){
    console.log("a team gets edited: ===========>", theIdOfTheEntry)
    return this.myhttp.post(`http://localhost:3000/api/team/` + theIdOfTheEntry,{withCredentials: true})
    .map((res)=> res.json())
  }

  addTeam(theIdOfTheEntry){
    console.log("testing out if the team is really getting pushed", theIdOfTheEntry);
    return this.myhttp.post(`http://localhost:3000/api/team/`, theIdOfTheEntry,{withCredentials: true})
  }
  

  // updateTournament
  // ---- change name, remove a specific team 
  // deleteTeam(){
  // }
}
