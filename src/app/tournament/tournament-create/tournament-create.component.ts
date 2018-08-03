import { Component, OnInit } from '@angular/core';
import { TournamentService } from '../../services/tournament.service';

@Component({
  selector: 'app-tournament-create',
  templateUrl: './tournament-create.component.html',
  styleUrls: ['./tournament-create.component.css']
})
export class TournamentCreateComponent implements OnInit {

  newTournament:  any = {};
  teams:     Array<any>;
  teamToDelete:   any = {};

  constructor(private tournamentService: TournamentService) { }

  tryToCreateTournament(){
    console.log("create tournament reached");
    console.log(this.newTournament);
    this.tournamentService.createTournament(this.newTournament)
    .subscribe(
      (res)=>{this.newTournament = res},
      (err)=>{err}
    )
  }

  getTeamList(){
    console.log("see team list");
  }

  addTeam(){
    console.log("add team");
  }

  tryToDeleteTeam(){
    console.log("delete team");
  }

  tryToEditWinLose(){
    console.log("try to edit win lose status");
  }

  ngOnInit() {
  }
  
}
