import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../services/team.service';
import { UserService } from '../../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { Router, Route} from '@angular/router'

@Component({
  selector: 'app-team-profile',
  templateUrl: './team-profile.component.html',
  styleUrls: ['./team-profile.component.css']
})
export class TeamProfileComponent implements OnInit {
  
  theError:        any;
  theLoggedInUser: any = {}
  theActualTeam: any = {}

  constructor(public TeamService: TeamService,
     public userService: UserService,
      public allTeamsRoute: ActivatedRoute,
      private router: Router
    ) { }


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


    deleteThisTeam(){
      this.TeamService.deleteATeam(this.theActualTeam._id)
      .subscribe((res)=>{
        // ROUTER NAVIGATE TO MY TEAMS: set up the my teams in express
      });
    }














  ngOnInit() {
    this.checkIfLoggedIn();
    this.allTeamsRoute.params //this allows us to grab the id from the browser URL and pull that teams info
    .subscribe((params)=>{
      console.log("1st=-=-=-=--=-=-=-=-=-=-=-=-=-=-1st")
      this.TeamService.getJustOneTeam(params['id'])
      .subscribe((theTeamThatWeGetFromTeamService)=>{
        console.log('Team', theTeamThatWeGetFromTeamService)
        this.theActualTeam = theTeamThatWeGetFromTeamService;
        console.log(this.theActualTeam);
      })
    });
 
  }

}


