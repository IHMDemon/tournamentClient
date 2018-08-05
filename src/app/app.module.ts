import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from "@angular/router";



import { TournamentService } from './services/tournament.service';
import { UserService } from './services/user.service';







=======
import {FormsModule} from '@angular/forms'
import { RouterModule, Routes} from "@angular/router"
import { HttpModule } from '../../node_modules/@angular/http';
import { UserService } from './services/user.service';

>>>>>>> 91acd0f4469db625e4c6449b138ec3bf4fe18d89
import { AppComponent } from './app.component';
import { TournamentComponent } from './tournament/tournament.component';
import { TournamentCreateComponent } from './tournament/tournament-create/tournament-create.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
<<<<<<< HEAD
import { TournamentBracketComponent } from './tournament/tournament-bracket/tournament-bracket.component';
import { TeamCreationComponent } from './teams/team-creation/team-creation.component';
import { UserCreationComponent } from './users/user-creation/user-creation.component'
const routes: Routes = [
  { path: 'team/:id',  component: TeamCreationComponent},
  { path: 'tournament/create', component: TournamentCreateComponent },
  { path: 'signup', component: UserCreationComponent}
  ];
=======
import { UsersComponentComponent } from './users/users-component/users-component.component';

const routes: Routes = [

  {path: 'signup', component: UsersComponentComponent}




]


>>>>>>> 91acd0f4469db625e4c6449b138ec3bf4fe18d89

// sample inside route array   {path: 'api/tasks/delete/:id', component: TodoListComponent}
  
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    TournamentComponent,
    TournamentCreateComponent,
<<<<<<< HEAD
    TournamentBracketComponent,
    TeamCreationComponent,
    UserCreationComponent,
=======
    NavBarComponent,
    UsersComponentComponent,
>>>>>>> 91acd0f4469db625e4c6449b138ec3bf4fe18d89
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
<<<<<<< HEAD
    RouterModule,
    RouterModule.forRoot(routes)
  ],
  providers: [TournamentService, UserService],

=======
    RouterModule.forRoot(routes)
  ],
  providers: [UserService],
>>>>>>> 91acd0f4469db625e4c6449b138ec3bf4fe18d89
  bootstrap: [AppComponent]
})
export class AppModule { }
