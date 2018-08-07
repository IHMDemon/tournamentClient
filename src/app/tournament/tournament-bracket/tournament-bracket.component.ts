import { Component, OnInit } from '@angular/core';
import {AllTeamsComponent} from '../../teams/all-teams/all-teams.component';
import {TeamProfileComponent} from '../../teams/team-profile/team-profile.component';

@Component({
  selector: 'app-tournament-bracket',
  templateUrl: './tournament-bracket.component.html',
  styleUrls: ['./tournament-bracket.component.css']
})
export class TournamentBracketComponent implements OnInit {

  constructor(public allTeamsComponent: AllTeamsComponent, public teamProfileComponent: TeamProfileComponent) { }
  theTeamList:Array<any>;
  teamAdd: Array<any> = [];

  addToBracket(addTeam){
    this.teamAdd.unshift(addTeam);
  }

  ngOnInit() {
  }

}
