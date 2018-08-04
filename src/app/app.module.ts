import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from './app.component';
import { TournamentBracketComponent } from './tournament-bracket/tournament-bracket.component';
import { TournamentComponent } from './tournament/tournament.component';
import { TournamentCreateComponent } from './tournament/tournament-create/tournament-create.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TeamCreationComponent } from './team-creation/team-creation.component';
import { TournamentService } from './services/tournament.service';

const routes: Routes = [
  { path: 'team/:id',  component: TeamCreationComponent },
  { path: 'tournament/create', component: TournamentCreateComponent },
  ];

// sample inside route array   {path: 'api/tasks/delete/:id', component: TodoListComponent}
  
@NgModule({
  declarations: [
    AppComponent,
    TournamentBracketComponent,
    NavBarComponent,
    TeamCreationComponent,
    TournamentComponent,
    TournamentCreateComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
  ],
  providers: [TournamentService],

  bootstrap: [AppComponent]
})
export class AppModule { }
