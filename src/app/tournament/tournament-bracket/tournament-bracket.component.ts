import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../services/team.service';
@Component({
  selector: 'app-tournament-bracket',
  templateUrl: './tournament-bracket.component.html',
  styleUrls: ['./tournament-bracket.component.css']
})
export class TournamentBracketComponent implements OnInit {
  
  allTheTeams:Array<any>;
  teamBracket: Array<any>;
  theBracket: Array<any> = [];
  firstTeam:Array<any> = [];
  secondTeam:Array<any> = [];

  constructor(
    public teamService: TeamService,
  ) { }

  
  assignAllTeamsToBracket(){
    this.teamService.getteams()
    .subscribe((res)=>{
      this.teamBracket = res;
      if(this.teamBracket.length%2 === 0){
      for(let x=0; x <= this.teamBracket.length-1;x++){
        if(x%2 === 0){
          this.secondTeam.unshift(this.teamBracket[x]);
          }
          else if (x%2 === 1){
            this.firstTeam.unshift(this.teamBracket[x]);
          }
          else {console.log("I'm inside all-teams component ts");}
      }
      for(let y = 0; y < this.firstTeam.length; y++){
        this.theBracket.push({
          firstTeam: this.firstTeam[y],
          secondTeam: this.secondTeam[y]
        })
        
      }
      console.log("=>>>>>>>>>>>>>>>>",this.theBracket);
    } else if(this.teamBracket.length === 1){
      console.log("THE WINNER IS: ",this.teamBracket[0]);  
    } else {
      console.log("YOU NEED ONE MORE TEAM BEFORE WE CAN START and still inside all-teams-comp")
    }
    })
  }


  ngOnInit() {
    this.assignAllTeamsToBracket()
  }

}
