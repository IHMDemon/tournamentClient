import { Component, OnInit } from '@angular/core';
import { TournamentService } from '../../services/tournament.service';
import { UserService } from '../../services/user.service';
import { TeamService } from '../../services/team.service';

@Component({
  selector: 'app-tournament-create',
  templateUrl: './tournament-create.component.html',
  styleUrls: ['./tournament-create.component.css']
})
export class TournamentCreateComponent implements OnInit {

  newTournament:  any = {};
  teams:          Array<any>;
  teamToDelete:   any = {};
  
  constructor(public tournamentService: TournamentService, public userService: UserService, public teamService: TeamService) { }
  
  theLoggedInUser: any = {}
  theError: any;
  team:           any = {};


  successCallback(userObject){
    this.theError = '';
    this.theLoggedInUser = userObject;
  }

  errorCallback(errorObject){
    this.theError = errorObject;
	  // this.router.navigate(['login']);
    this.theLoggedInUser = {username:'', password:''};
  }


  checkIfLoggedIn(){
    this.userService.checkIfLoggedIn()
      .subscribe(
        res =>{
          console.log("testing");

          console.log("what is the user: ", res);
          this.successCallback(res)
        },
        err =>{this.errorCallback(null)}
      )
  }

  tryToCreateTournament(){
    console.log(this.newTournament)
    this.tournamentService.createTournament(this.newTournament)
    .subscribe(
      (res)=>{
        // this.newTournament = {};
        this.newTournament = res;
        console.log("reached trytocreatetournament=========", this.newTournament);
        return this.newTournament;
      },
      (err)=>{err}
    )
  }
  
  getTeamList(){
    console.log("see team list");
  }

  // addTeam(teamer){
  //   this.tournamentService.addTeam(teamer)
  //   .subscribe(
  //     (res)=>{
  //       this.team = res;
  //       return this.team;
  //     },
  //   (err)=>{err}
  //   )
  //   console.log("added team", this.team);
  // }

  tryToDeleteTeam(){
    console.log("delete team");
  }

  tryToEditWinLose(){
    console.log("try to edit win lose status");
  }

  ngOnInit() {
    this.checkIfLoggedIn();
  }
  
}
