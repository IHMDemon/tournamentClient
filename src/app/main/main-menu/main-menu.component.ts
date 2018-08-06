import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service'
import {ActivatedRoute} from '@angular/router'
import {Router, Route} from '@angular/router'
import {FormsModule} from '@angular/forms'
import {errorObject} from '../../../../node_modules/rxjs/internal-compatibility'

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
    this.theLoggedInUser = {username:'', password:''};
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
  }

}
