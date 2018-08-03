import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from "@angular/router";

=======
>>>>>>> 1818c3b40dbbae3c7819fe9ee9f85f92ff5e8484
import { AppComponent } from './app.component';
import { TournamentBracketComponent } from './tournament-bracket/tournament-bracket.component';
import { TournamentComponent } from './tournament/tournament.component';
import { TournamentCreateComponent } from './tournament/tournament-create/tournament-create.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TeamCreationComponent } from './team-creation/team-creation.component';

const routes: Routes = [

  { path: 'team/:id',  component: TeamCreationComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    TournamentBracketComponent,
<<<<<<< HEAD
    NavBarComponent,
    TeamCreationComponent
=======
    TournamentComponent,
    TournamentCreateComponent,
    NavBarComponent,
>>>>>>> 1818c3b40dbbae3c7819fe9ee9f85f92ff5e8484
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
