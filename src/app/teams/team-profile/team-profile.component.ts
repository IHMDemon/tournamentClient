import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../services/team.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-team-profile',
  templateUrl: './team-profile.component.html',
  styleUrls: ['./team-profile.component.css']
})
export class TeamProfileComponent implements OnInit {

  constructor(public TeamService: TeamService, public userService: UserService) { }

  ngOnInit() {
    this..getProcessTemplates()
    .subscribe(function(response) {
      this.processTemplates = response.json();
      console.log(this.processTemplates);
    });
  }

}
