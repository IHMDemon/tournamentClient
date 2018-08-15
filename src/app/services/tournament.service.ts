import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { RouterModule, Routes } from '@angular/router';
import 'rxjs/add/operator/map';
import {environment} from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class TournamentService {
  serviceTeamList:Array<any> = [];
  constructor(private myhttp: Http) { }

  baseUrl: any = environment.url_base;



  handleError(e) {
    console.log(e);
     return Observable.throw(e.json().message);
  }


  getAllTheTournaments(){
    return this.myhttp.get(`${this.baseUrl}/api/tournament/alltournaments`)
    .map((res)=> res.json())
  }


  getTheTournamentTeams(theTournamentId){
    console.log('SERVICE TOURNAMENT ID',theTournamentId);
    return this.myhttp.get(`${this.baseUrl}/api/team/tournamentTeams/${theTournamentId}`)
    .map((res)=> res.json())
  }


  getJustOneTournament(theIdOfTheTournament){
    return this.myhttp.get(`${this.baseUrl}/api/tournament/details/${theIdOfTheTournament}`)
    .map((res)=> res.json());
  }
  

  createTournament(theTournament) {
    console.log("tournament created: =============>",theTournament)
    return this.myhttp.post(`${this.baseUrl}/api/tournament/create`, theTournament, {withCredentials: true})
      .map(res => res.json())
  }

  playerJoinsATournament(playerJoinsATournamentObjInfo) {
    console.log("ObjectId of the Player and the Tournament being sent to mongo to make the additions to their respective arrays.")
    return this.myhttp.post(`${this.baseUrl}/api/tournament/playerJoinsATournament`, playerJoinsATournamentObjInfo, {withCredentials: true})
      .map(res => res.json())
  }


  teamJoinsATournament(teamJoinsATournamentObjInfo) {
    console.log("ObjectId of the Team and the Tournament being sent to mongo to make the additions to their respective arrays.")
    return this.myhttp.post(`${this.baseUrl}/api/tournament/teamJoinsATournament`, teamJoinsATournamentObjInfo, {withCredentials: true})
      .map(res => res.json())
  }


  updateTournament(theIdOfTheTournament, theUpdatedTournament){
    console.log("a team gets edited: ===========>", theUpdatedTournament)
    return this.myhttp.post(`${this.baseUrl}/api/tournament/update/${theIdOfTheTournament}`,theUpdatedTournament,{withCredentials: true})
    .map((res)=> res.json())
  }


  deleteThisTournament(theIdOfTheTournament){
    return this.myhttp.delete(`${this.baseUrl}/api/tournament/delete/${theIdOfTheTournament}`,{withCredentials:true })
    .map((res)=> res.json());
  }
  // updateTournament(theIdOfTheTournament){
  //   console.log("a tournament gets edited: ===========>", theIdOfTheTournament)
  //   return this.myhttp.post(`${this.baseUrl}/api/tournament/update/${theIdOfTheTournament}`)
  //   .map((res)=> res.json())
  // }

  addTeam(theIdOfTheEntry){
    console.log("testing out if the team is really getting pushed", theIdOfTheEntry);
    return this.myhttp.post(`${this.baseUrl}/api/team/`, theIdOfTheEntry,{withCredentials: true})
  }
  

  // updateTournament
  // ---- change name, remove a specific team 
  // deleteTeam(){
  // }
}
