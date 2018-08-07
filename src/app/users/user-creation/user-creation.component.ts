

import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service'
import {ActivatedRoute} from '@angular/router'
import {Router, Route} from '@angular/router'
import {FormsModule} from '@angular/forms'
import {errorObject} from 'rxjs/internal-compatibility'




@Component({
  selector: 'app-user-creation-component',
  templateUrl: './user-creation.component.html',
  styleUrls: ['./user-creation.component.css']
})
export class UserCreationComponent implements OnInit {

  theNewUser: any = {}
  theError: any;

  successCallback(userObject){
    // this.theNewUser = userObject; Removed this line of experimenation
    this.theError = '';
  }

  errorCallback(errorObject){
    this.theError = errorObject;
    this.theNewUser = {username:'', password:''};
  }




  constructor(public theActivatedRoute: ActivatedRoute,
    public userServ: UserService,
    public router: Router
  
  ) { }

  createUser(){
    this.userServ.createUser(this.theNewUser)
    .subscribe(
      (successResponse)=>{
        console.log('UserCreationSuccessful');
        this.successCallback(successResponse);},
      (errorResponse)=>{this.errorCallback(errorResponse)}
    );
  }


  ngOnInit() {
  }

}

