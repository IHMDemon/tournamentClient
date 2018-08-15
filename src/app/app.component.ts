import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {trigger, transition} from "@angular/animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('someCoolAnimation', [
      transition('* => fadeIn', [
        // fade in Animation
      ]),
      transition('* => fadeOut', [
        // fade out Animation
      ])
    ])
  ]


})
        

export class AppComponent implements OnInit {
  bindingVar = '';
  fadeIn() {
    this.bindingVar = 'fadeIn';
  }
  fadeOut() {
    this.bindingVar = 'fadeOut';
  }
  toggle() {
    this.bindingVar == 'fadeOut' ? this.fadeIn() : this.fadeOut();
  }
  title = 'app';


constructor (public userServ: UserService) {}

theLoggedInUser:any = {};
theError = '';



//PUT THIS IN ANOTHER COMPONENT: THIS IS SANDRA'S ADVICE.
//not so much for app, but for other components when the router.
//You need to import router through the component.
//SANDRA CODE
  ngOnInit(){
    // this.userServ.checkIfLoggedIn()
    // .toPromise()
    // .then(user=>{
    //   this.theLoggedInUser = user
    // })
    // .catch(err=>{
    //   this.theError=err.json();
      // this.router.navigate(['/login']);
    // })
  }
}
//behavioral subject: I will cool.
// Every component.

