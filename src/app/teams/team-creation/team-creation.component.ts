import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../services/team.service';
import { UserService } from '../../services/user.service';
import {ActivatedRoute} from '@angular/router';
import {Router, Route} from '@angular/router'
@Component({
  selector: 'app-team-creation',
  templateUrl: './team-creation.component.html',
  styleUrls: ['./team-creation.component.css']
})
export class TeamCreationComponent implements OnInit {


  constructor(public TeamService: TeamService,
     public userService: UserService,
     private router: Router,
     private activatedRoute: ActivatedRoute,
    ) { }



  newTeam: any = {};
  theLoggedInUser: any = {}
  theError: any;

  addNewTeam() {
    this.newTeam.teamCaptain = this.theLoggedInUser._id
    console.log('====================================>',this.newTeam.teamCaptain.username)
    console.log("creating new team");
    console.log(this.newTeam, );
    this.TeamService.createTeam(this.newTeam)
      .subscribe(
        (res) => {
          this.newTeam = res;
          this.router.navigate(['/allteams']);

        },
        (err) => { err }
      )
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
    this.theLoggedInUser = {};
  }

  //checks if the person is logged in and pulls the information into this component.
  checkIfLoggedIn() {
    this.userService.checkIfLoggedIn()
      .subscribe(
        res => {
          console.log("testing");

          console.log("what is the user: ", res);
          this.successCallback(res)
        },
        err => { this.errorCallback(null) }
      )
  }


  ngOnInit() {
    this.checkIfLoggedIn();
  }

}
