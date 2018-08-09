import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service'
import {ActivatedRoute} from '@angular/router'
import {Router, Route} from '@angular/router'
import {FormsModule} from '@angular/forms'
import {errorObject} from 'rxjs/internal-compatibility'

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

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

  constructor(public theActivatedRoute: ActivatedRoute,
    public userServ: UserService,
    public router: Router
  
  ) { }

  logTheUserIn(){
    this.userServ.loginUser(this.theLoggedInUser)
    .subscribe(
      (successResponse)=>{
        console.log('UserLoginSuccessful');
        this.successCallback(successResponse);
        this.router.navigate(['/home'])
      },
      (errorResponse)=>{this.errorCallback(errorResponse)}
    );
  }


  checkIfLoggedIn(){
    this.userServ.checkIfLoggedIn()
      .subscribe(
        res =>{
          console.log(res);
          this.successCallback(res)
          this.router.navigate(['/home']);

        },
        err =>{this.errorCallback(null)}
      )
  }

  ngOnInit() {
    this.checkIfLoggedIn();
  }

}

