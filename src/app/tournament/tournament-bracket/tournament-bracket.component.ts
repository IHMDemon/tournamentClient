import { Component, OnInit } from '@angular/core';
import {AllTeamsComponent} from '../../teams/all-teams/all-teams.component';

@Component({
  selector: 'app-tournament-bracket',
  templateUrl: './tournament-bracket.component.html',
  styleUrls: ['./tournament-bracket.component.css']
})
export class TournamentBracketComponent implements OnInit {

  constructor() { }
  theTeamList:Array<any>;
  teamAdd: Array<any> = [];

  addToBracket(addTeam){
    return this.teamAdd.unshift(addTeam);
  }

  ngOnInit() {
  }

}
