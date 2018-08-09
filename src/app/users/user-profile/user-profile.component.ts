import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../services/team.service';
import { UserService } from '../../services/user.service';
import { TournamentService} from '../../services/tournament.service'
import { ActivatedRoute } from '@angular/router';
import { Router, Route} from '@angular/router'

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  theError:             any;
  theLoggedInUser:      any = {};
  theActualUser:        any = {};




  constructor(
    public userService: UserService,
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public TournamentService: TournamentService,
    public teamService: TeamService
  ) { }






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
      this.userService.getJustOneUser(params['id'])
      .subscribe((theUserThatWeGetFromUserService)=>{
        this.theActualUser = theUserThatWeGetFromUserService;
        console.log(this.theActualUser);
      })
    })
  }

}
