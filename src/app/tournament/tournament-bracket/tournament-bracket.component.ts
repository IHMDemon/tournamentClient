import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../services/team.service';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';
import { TournamentService } from '../../services/tournament.service';
import { UserService } from '../../services/user.service';
@Component({
  selector: 'app-tournament-bracket',
  templateUrl: './tournament-bracket.component.html',
  styleUrls: ['./tournament-bracket.component.css']
})
export class TournamentBracketComponent implements OnInit {
  
  allTheTeams:Array<any>;
  teamBracket: Array<any>;
  theBracket: Array<any> = [];
  firstTeam:Array<any> = [];
  secondTeam:Array<any> = [];
  theActualTournament:any = {};
  theError:any;
  theLoggedInUser:any = {};
  theTournamentTeams:Array<any> = [];

  constructor(
    public teamService: TeamService,
    public activatedRoute: ActivatedRoute,
    public TournamentService: TournamentService,
    public userService: UserService
  ) { }


  getTheTournamentTeams(){
    const theTournamentId = this.theActualTournament._id
    console.log('COMPONENTTOURNAMENTID',theTournamentId);
    this.TournamentService.getTheTournamentTeams(theTournamentId)
    .subscribe((res)=>{
      this.theTournamentTeams = res;
      console.log('TOURNAMENT TEAMS', this.theTournamentTeams)
    })
  }
  



  assignAllTeamsToBracket(){
    this.teamService.getteams()
    .subscribe((res)=>{
      this.teamBracket = res;
      console.log("WHAT YOU ARE WORKING RIGHT NOW ============", this.teamBracket);
      if(this.teamBracket.length%2 === 0){
      for(let x=0; x <= this.teamBracket.length-1;x++){
        if(x%2 === 0){
          this.secondTeam.unshift(this.teamBracket[x]);
          }
          else if (x%2 === 1){
            this.firstTeam.unshift(this.teamBracket[x]);
          }
          else {console.log("I'm inside all-teams component ts");}
          }
          for(let y = 0; y < this.firstTeam.length; y++){
            this.theBracket.push({
            firstTeam: this.firstTeam[y],
            secondTeam: this.secondTeam[y]
          })
          }
      console.log("=>>>>>>>>>>>>>>>>",this.theBracket);
    } else if(this.teamBracket.length === 1){
      console.log("THE WINNER IS: ",this.teamBracket[0]);  
    } else {
      console.log("YOU NEED ONE MORE TEAM BEFORE WE CAN START and still inside all-teams-comp")
    }
    })
  }

  checkTeamList(){
    this.teamService.getteams()
    .subscribe((res)=>{
      this.teamBracket = [];
      this.teamBracket = res;
    })
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




  ngOnInit(){
    this.checkIfLoggedIn();
        this.activatedRoute.params
        .subscribe((params)=>{
          this.TournamentService.getJustOneTournament(params['id'])
          .subscribe((theTournamentThatWeGetFromTournamentService)=>{
            this.theActualTournament = theTournamentThatWeGetFromTournamentService;
            this.getTheTournamentTeams()
            this.assignAllTeamsToBracket();
          })
        })


  }


      




 






} //END tournament-bracket component

