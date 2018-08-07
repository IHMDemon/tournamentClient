import { Component, OnInit } from '@angular/core';
import { UserService} from '../services/user.service'
import {ActivatedRoute} from '@angular/router'
import {Router, Route} from '@angular/router'

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  theLoggedInUser: any = {}
  theError: any;

  constructor(
    public userService: UserService,
    public router: Router,
    public activatedRoute: ActivatedRoute
  ) { }


//succesCallback is going to get rid of error message and push the data of the user in the loggedInUser Object.
successCallback(userObject) {
  this.theError = '';
  this.theLoggedInUser = userObject;
}
//It makes the logged in user nothing or an empty string and creates an error message.
errorCallback(errorObject) {
  this.theError = errorObject;
  // this.router.navigate(['login']);
  this.theLoggedInUser = undefined;
}

//checks if the person is logged in and pulls the information into this component.
checkIfLoggedIn() {
  this.userService.checkIfLoggedIn()
    .subscribe(
      res => {

        console.log("User login confirmed ", res);
        this.successCallback(res)
      },
      err => { this.errorCallback(null) }
    )
}

logMeOut() {
  this.userService.logoutUser()
  .subscribe(
    res =>{
     this.router.navigate(['/']);
     this.checkIfLoggedIn();
    }
  )
}

ngOnInit() {
  this.checkIfLoggedIn();
}









}
