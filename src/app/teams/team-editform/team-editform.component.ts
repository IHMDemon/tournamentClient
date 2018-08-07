import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../services/team.service';
import { UserService } from '../../services/user.service';
import {ActivatedRoute} from '@angular/router';
import {Router, Route} from '@angular/router'


@Component({
  selector: 'app-team-editform',
  templateUrl: './team-editform.component.html',
  styleUrls: ['./team-editform.component.css']
})
export class TeamEditformComponent implements OnInit { 
  saveError= "";
  team: any;
  theActualTeam: any = {
    teamLogo: "",
    teamDescription:"",
    teamName: ""
    

  }

  constructor(
    public TeamService: TeamService, 
    public userService: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute,) { 


  
  }

  ngOnInit() {
    
  }

}
