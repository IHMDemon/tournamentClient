import { Component, OnInit } from '@angular/core';
import { TimelineMax, CSSPlugin, ScrollToPlugin, Draggable, TweenLite, SplitText } from "gsap/all";
import { TweenMax, ease, Bounce,Back,TimelineLite, easeOut} from "gsap/TweenMax";
import 'gsap';
import { UserService} from '../services/user.service'
import { TeamService } from '../services/team.service';
import { TournamentService } from '../services/tournament.service';
    






@Component({
  selector: 'app-tween-me',
  templateUrl: './tween-me.component.html',
  styleUrls: ['./tween-me.component.css']
})
export class TweenMeComponent implements OnInit {
  
  allTheTeams: Array<any>;
  constructor(public tournamentService: TournamentService,
    public TeamService: TeamService,
    public userService: UserService,) { }
    getAllTheTeams(){
      this.TeamService.getteams()
      .subscribe((res)=>{
        this.allTheTeams = res;
      })
    }
  ngOnInit() {
    this.getAllTheTeams();
    TweenMax.to(".logo", 4, {x:'30%', ease:Bounce.easeOut});

    
   
  }
}
