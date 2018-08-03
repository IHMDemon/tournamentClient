import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service'
import {ActivatedRoute} from '@angular/router'
import {Router, Route} from '@angular/router'

@Component({
  selector: 'app-users-component',
  templateUrl: './users-component.component.html',
  styleUrls: ['./users-component.component.css']
})
export class UsersComponentComponent implements OnInit {

  theNewUser: any = {}


  constructor(public theActivatedRoute: ActivatedRoute,
    public userServ: UserService,
    public router: Router
  
  ) { }

  createUser(){
    console.log("starting the create user process ============ ", this.theNewUser);
    this.userServ.signup(this.theNewUser)
    // .subscribe((afterTheUserIsCreated)=>{
    //   this.router.navigate(['/'])
    // })
    .then(() => {
      this.router.navigate(['/']);
    })
    .catch((err) => {
      alert("something went wrong!!!")
      console.log("logging error for signup ====== ", err)
    })
  }


  ngOnInit() {
  }

}
