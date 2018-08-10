import { Component, OnInit } from '@angular/core';
import { UserService} from '../../services/user.service'
import { TeamService } from '../../services/team.service';
import { TournamentService } from '../../services/tournament.service';
import { ActivatedRoute } from '@angular/router';
import { Router, Route} from '@angular/router';
// import { TimelineMax, CSSPlugin, ScrollToPlugin, Draggable, TweenLite, SplitText } from "gsap/all";
// import { TweenMax, ease, Bounce,Back,TimelineLite, easeOut} from "gsap/TweenMax";
// import 'gsap';

@Component({
  selector: 'app-all-teams',
  templateUrl: './all-teams.component.html',
  styleUrls: ['./all-teams.component.css']
})
export class AllTeamsComponent implements OnInit {

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
    // TweenMax.to(".logo", 3, {rotation: 360, ease:Bounce.easeOut});
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
