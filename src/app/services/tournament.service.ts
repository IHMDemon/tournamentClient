import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class TournamentService {

  constructor(private myhttp: Http) { }

  handleError(e) {
    console.log(e);
     return Observable.throw(e.json().message);
  }

  createTournament(theTournament) {
    return this.myhttp.post(`http://localhost:3000/api/tournament/create`, theTournament, {withCredentials: true})
      .map(res => res.json())
  }

  updateTournament
  deleteTeam(){
  }
}
