import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../services/team.service';
import { UserService } from '../../services/user.service';
import { TournamentService} from '../../services/tournament.service'
import { ActivatedRoute } from '@angular/router';
import { Router, Route} from '@angular/router'



@Component({
  selector: 'app-tournament-details',
  templateUrl: './tournament-details.component.html',
  styleUrls: ['./tournament-details.component.css']
})
export class TournamentDetailsComponent implements OnInit {

  theError:        any;
  theLoggedInUser: any = {}
  theActualTournament: any = {}
  userJoinsATournamentObjInfo: any = {}

  constructor(public TournamentService: TournamentService,
    public userService: UserService,
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public tournamentService: TournamentService,
    public teamService: TeamService
  
  ) { }

  // example 
  // this.newTeam.teamCaptain = this.theLoggedInUser._id

  userJoiningTournament(){ 
    console.log(`${this.theLoggedInUser.username} wants to join this tournament: ${this.theActualTournament.tournamentName}`)
    
    this.userJoinsATournamentObjInfo.tournamentId = this.theActualTournament._id;
    this.userJoinsATournamentObjInfo.playerId = this.theLoggedInUser._id;
    this.tournamentService.playerJoinsATournament(playerJoinsATournamentObjInfo);

  }











    successCallback(userObject){
      this.theError = '';
      this.theLoggedInUser = userObject;
    }
    
    errorCallback(errorObject){
      this.theError = errorObject;
      // this.router.navigate(['login']);
      this.theLoggedInUser = undefined;
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
  



  ngOnInit() {
    this.checkIfLoggedIn();
    this.activatedRoute.params
    .subscribe((params)=>{
      this.TournamentService.getJustOneTournament(params['id'])
      .subscribe((theTournamentThatWeGetFromTournamentService)=>{
        console.log('Tournament', theTournamentThatWeGetFromTournamentService)
        this.theActualTournament = theTournamentThatWeGetFromTournamentService;
        console.log(this.theActualTournament);
      })
    })
  }

}
