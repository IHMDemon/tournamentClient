import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {ActivatedRoute} from '@angular/router';
import {Router, Route} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {errorObject} from 'rxjs/internal-compatibility';
import { TimelineMax, CSSPlugin, ScrollToPlugin, Draggable, TweenLite, SplitText } from "gsap/all";
import { TweenMax, ease, Bounce,Back,TimelineLite, easeOut} from "gsap/TweenMax";
// import 'gsap';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  theLoggedInUser: any = {}
  theError: any;


  successCallback(userObject){
    this.theError = '';
    this.theLoggedInUser = userObject;
  }

  errorCallback(errorObject){
    this.theError = errorObject;
    this.theLoggedInUser = undefined;
  }


  checkIfLoggedIn(){
    this.userServ.checkIfLoggedIn()
      .subscribe(
        res =>{
          console.log(res);
          this.successCallback(res)
        },
        err =>{this.errorCallback(null)}
      )
  }

  constructor(public userServ: UserService
  
  
  ) { }




  ngOnInit() {
    this.checkIfLoggedIn();
    TweenMax.to(".first", 2, {x:0, ease:Bounce.easeOut});
  }

}
