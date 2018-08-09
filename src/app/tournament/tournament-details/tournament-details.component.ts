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

  constructor(
    public userService: UserService,
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public TournamentService: TournamentService,
    public teamService: TeamService
  
  ) { }


  userJoiningTournament(){ 
    console.log(`${this.theLoggedInUser.username} wants to join this tournament: ${this.theActualTournament.tournamentName}`)
    
    this.userJoinsATournamentObjInfo.tournamentId = this.theActualTournament._id;
    this.userJoinsATournamentObjInfo.playerId = this.theLoggedInUser._id;
    this.TournamentService.playerJoinsATournament(this.userJoinsATournamentObjInfo)
    // this.tournamentService.playerJoinsATournament(playerJoinsATournamentObjInfo)
    .subscribe(
      (res) => {
        console.log('Player successfully added to team');
        this.router.navigate(['/users/mytournaments']); //you need to add this later.
        //redirect with a popup message: You have successfully signed up for tournament.name, blah blah blah.

      },
      (err) => { err }
    )

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
