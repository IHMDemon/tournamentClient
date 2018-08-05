import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from "@angular/router";



import { TournamentService } from './services/tournament.service';
import { UserService } from './services/user.service';







import { AppComponent } from './app.component';
import { TournamentComponent } from './tournament/tournament.component';
import { TournamentCreateComponent } from './tournament/tournament-create/tournament-create.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TournamentBracketComponent } from './tournament/tournament-bracket/tournament-bracket.component';
import { TeamCreationComponent } from './teams/team-creation/team-creation.component';
import { UserCreationComponent } from './users/user-creation/user-creation.component'
const routes: Routes = [
  { path: 'team/:id',  component: TeamCreationComponent},
  { path: 'tournament/create', component: TournamentCreateComponent },
  { path: 'signup', component: UserCreationComponent}
  ];

// sample inside route array   {path: 'api/tasks/delete/:id', component: TodoListComponent}
  
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    TournamentComponent,
    TournamentCreateComponent,
    TournamentBracketComponent,
    TeamCreationComponent,
    UserCreationComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    RouterModule.forRoot(routes)
  ],
  providers: [TournamentService, UserService],

  bootstrap: [AppComponent]
})
export class AppModule { }
