import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../services/team.service';
@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {

  allTheTeams: Array<any>;
  constructor(public TeamService: TeamService) { }
    getAllTheTeams(){
      this.TeamService.getteams()
      .subscribe((res)=>{
        this.allTheTeams = res;

      })
    }
  ngOnInit() {
    console.log("listofteams=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-listofteams")
    this.getAllTheTeams();
  }

}
