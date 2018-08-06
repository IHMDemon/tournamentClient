import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../services/team.service';
import { UserService } from '../../services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-team-profile',
  templateUrl: './team-profile.component.html',
  styleUrls: ['./team-profile.component.css']
})
export class TeamProfileComponent implements OnInit {
  
  theActualTeam: any = {}

  constructor(public TeamService: TeamService, public userService: UserService, public allTeamsRoute: ActivatedRoute) { }

  ngOnInit() {
    this.allTeamsRoute.params //this allows us to grab the id from the browser URL and pull that teams info
    .subscribe((params)=>{
      console.log("1st=-=-=-=--=-=-=-=-=-=-=-=-=-=-1st")
      // this.TeamService.getJustOneTeam(params['id'])
      // .subscribe((theTeamThatWeGetFromTeamService)=>{
      //   this.theActualTeam = theTeamThatWeGetFromTeamService
      // })
    });
 
  }

}
