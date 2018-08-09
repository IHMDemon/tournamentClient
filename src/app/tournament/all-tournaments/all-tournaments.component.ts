import { Component, OnInit } from '@angular/core';
import { TournamentService } from '../../services/tournament.service';
import { UserService } from '../../services/user.service';
import { TeamService } from '../../services/team.service';
import { ActivatedRoute } from '@angular/router';
import { Router, Route} from '@angular/router';

@Component({
  selector: 'app-all-tournaments',
  templateUrl: './all-tournaments.component.html',
  styleUrls: ['./all-tournaments.component.css']
})
export class AllTournamentsComponent implements OnInit {

  allTheTournaments:          Array<any>;
  theLoggedInUser: any = {}
  theError:        any;

  constructor(
    public tournamentService: TournamentService,
    public userService: UserService,
    public teamService: TeamService,
    public router: Router,
    public activatedRoute: ActivatedRoute,

  ) { }


  getAllTheTournaments(){
    this.tournamentService.getAllTheTournaments()
    .subscribe((res)=>{
      this.allTheTournaments = res;
    })
  }


   

  // get all tournaments function
    //populate teams : express: details page
      //populate users express: details page


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



  ngOnInit() {
    this.getAllTheTournaments();
  }


 

}//END ALL TOURNAMENTS COMPONENT

  
  
  





