import { Component, OnInit, ElementRef } from '@angular/core';
import { TeamService } from '../../services/team.service';
import { UserService } from '../../services/user.service';
import { TournamentService} from '../../services/tournament.service'
import { ActivatedRoute } from '@angular/router';
import { Router, Route} from '@angular/router'
import {FormsModule} from '@angular/forms'



@Component({
  selector: 'app-tournament-details',
  templateUrl: './tournament-details.component.html',
  styleUrls: ['./tournament-details.component.css']
})
export class TournamentDetailsComponent implements OnInit {

  theError:        any;
  theLoggedInUser: any = {};
  theActualTournament: any = {};
  theChosenTeam: any = {};
  userJoinsATournamentObjInfo: any = {};
  teamJoinsATournamentObjInfo: any = {};
  detailedUserInfo: any = {};

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

  // return e.nativeElement.getAttribute('name') == 'txt3';

  // signUpThisTeam(chosenTeam) {
  
  //   console.log(this.theChosenTeam);
  // }



  teamJoiningTournament(chosenTeam){ 
    this.theChosenTeam = chosenTeam;
    console.log(`${this.theChosenTeam.teamName} wants to join this tournament: ${this.theActualTournament.tournamentName}`)
    this.teamJoinsATournamentObjInfo.tournamentId = this.theActualTournament._id;
    this.teamJoinsATournamentObjInfo.teamId = this.theChosenTeam._id;
    this.TournamentService.teamJoinsATournament(this.teamJoinsATournamentObjInfo)
    // this.tournamentService.playerJoinsATournament(playerJoinsATournamentObjInfo)
    .subscribe(
      (res) => {
        console.log('Player successfully added to team');
        this.router.navigate(['/alltournaments'])        //redirect with a popup message: You have successfully signed up for tournament.name, blah blah blah.

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
  
    updateThisTournament(){
      const theId = this.theActualTournament._id;
      console.log(theId);

      this.TournamentService.updateTournament(theId, this.theActualTournament)
      .subscribe((res)=>{
        this.router.navigate(['alltournaments'])
      })
    }

    deleteTournament(){

      const theId = this.theActualTournament._id;
      console.log(theId);
      this.TournamentService.deleteThisTournament(theId)
      .subscribe((res)=>{
        this.router.navigate(['alltournaments'])
      })
    }
  ngOnInit() {
    this.checkIfLoggedIn();
    this.activatedRoute.params
    .subscribe((params)=>{
      this.TournamentService.getJustOneTournament(params['id'])
      .subscribe((theTournamentThatWeGetFromTournamentService)=>{
        this.theActualTournament = theTournamentThatWeGetFromTournamentService;
        console.log('TOURNAMENT',this.theActualTournament);


    this.userService.getJustOneUser(this.theLoggedInUser._id)
      .subscribe((theUserThatWeGetBackfromUserService)=>{
        console.log(this.theLoggedInUser)
          this.detailedUserInfo = theUserThatWeGetBackfromUserService;
          console.log('DETAILED USER INFO', this.detailedUserInfo);
        })    
      })
    })
  }

}
