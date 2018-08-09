import { Component, OnInit } from '@angular/core';
import { UserService} from '../../services/user.service'
import { TeamService } from '../../services/team.service';
import { TournamentService } from '../../services/tournament.service';
import { ActivatedRoute } from '@angular/router';
import { Router, Route} from '@angular/router';

@Component({
  selector: 'app-all-teams',
  templateUrl: './all-teams.component.html',
  styleUrls: ['./all-teams.component.css']
})
export class AllTeamsComponent implements OnInit {

  firstTeam:Array<any> = [];
  secondTeam:Array<any> = [];
  theLoggedInUser: any = {}
  theError: any;
  allTheTeams: Array<any>;
  // teamBracketBitch: Array<any>;
  // theBracket: any = {};
  
  constructor(
    public TeamService: TeamService,
    public userService: UserService,
    public router: Router,
    public activatedRoute: ActivatedRoute,
    public tournamentService: TournamentService,
  ) { }

    
    // becomes a worthless piece of shit code if
    // I get express working which I have no idea 
    // how I fucking do it note to self work on 
    // express first fuck the angular side and 
    // fuck it with a straw
    //
    //
    // assignAllTeamsToBracket(){
    //   this.TeamService.getteams()
    //   .subscribe((res)=>{
    //     this.teamBracketBitch = res;
    //     if(this.teamBracketBitch.length%2 === 0){
    //     for(let x=0; x <= this.teamBracketBitch.length-1;x++){
    //       if(x%2 === 0){
    //         this.secondTeam.unshift(this.teamBracketBitch[x]);
    //         }
    //         else if (x%2 === 1){
    //           this.firstTeam.unshift(this.teamBracketBitch[x]);
    //         }
    //         else {console.log("I'm inside all-teams component ts");}
    //     }
    //     this.theBracket = {
    //       firstTeam: this.firstTeam,
    //       secondTeam: this.secondTeam
    //     }
    //     console.log(this.theBracket);
    //     return this.theBracket;
    //   } else {console.log("YOU NEED ONE MORE TEAM BEFORE WE CAN START")}
    //   })
    // }

    getAllTheTeams(){
      this.TeamService.getteams()
      .subscribe((res)=>{
        this.allTheTeams = res;
      })
    }
  ngOnInit() {
    console.log("listofteams=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-listofteams")
    this.checkIfLoggedIn();
    this.getAllTheTeams();
  }


//succesCallback is going to get rid of error message and push the data of the user in the loggedInUser Object.
successCallback(userObject) {
  this.theError = '';
  this.theLoggedInUser = userObject;
}
//It makes the logged in user nothing or an empty string and creates an error message.
errorCallback(errorObject) {
  this.theError = errorObject;
  // this.router.navigate(['login']);
  this.theLoggedInUser = undefined;
}

//checks if the person is logged in and pulls the information into this component.
checkIfLoggedIn() {
  this.userService.checkIfLoggedIn()
    .subscribe(
      res => {
        this.successCallback(res)
      },
      err => { this.errorCallback(null) }
    )
}











}//end class all teams component
