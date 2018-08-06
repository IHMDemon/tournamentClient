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
  
  theActualTeam: any = {}

  constructor(public TeamService: TeamService,
     public userService: UserService,
      public allTeamsRoute: ActivatedRoute,
      private router: Router
    ) { }

  ngOnInit() {
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
