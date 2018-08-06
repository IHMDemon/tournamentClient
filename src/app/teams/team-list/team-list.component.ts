import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../services/team.service';
import { ActivatedRoute } from '@angular/router';
import {Router, Route} from '@angular/router';
@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {

  allTheTeams: Array<any>;
  constructor(public TeamService: TeamService,
      public router: Router,
     public activatedRoute: ActivatedRoute
  ) { }
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
