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



//PUT THIS IN ANOTHER COMPONENT: THIS IS SANDRA'S ADVICE.
//not so much for app, but for other components when the router.
//You need to import router through the component.
//SANDRA CODE
  ngOnInit(){
    this.userServ.checkIfLoggedIn()
    .toPromise()
    .then(user=>{
      this.theLoggedInUser = user
    })
    .catch(err=>{
      this.theError=err.json();
      // this.router.navigate(['/login']);
    })
  }
}
//behavioral subject: I will cool.
// Every component.

