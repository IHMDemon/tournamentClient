import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../services/team.service';
@Component({
  selector: 'app-team-creation',
  templateUrl: './team-creation.component.html',
  styleUrls: ['./team-creation.component.css']
})
export class TeamCreationComponent implements OnInit {
  team

  newTeam:  any = {};
 
 

  constructor(public TeamService:  TeamService) { }

  addNewTeam(){
    console.log("creating new team");
    console.log(this.newTeam,);
    this.newTeam.createTeam(this.newTeam)
    .subscribe(
      (res)=>{
        this.newTeam = res;
        
      },
      (err)=>{err}
    )
  }

  ngOnInit() {
  }

}
