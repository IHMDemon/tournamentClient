import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

constructor (public userServ: UserService) {}

theLoggedInUser:any = {};
theError = '';

successCallback(userObject){
  this.theError = '';
  this.theLoggedInUser = userObject;
}


errorCallback(errorObject){
  this.theError = errorObject;
  this.theLoggedInUser = {username:'', password:''};
}




checkIfTheUserIsLoggedIn(){
  this.userServ.checkIfLoggedIn()
  .subscribe(
    res =>{this.successCallback(res);
    console.log(res)
  },
    err =>{this.errorCallback(null)}
  )
}








  ngOnInit(){
    this.checkIfTheUserIsLoggedIn();
  }
}
