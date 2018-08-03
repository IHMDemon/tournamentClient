import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from './app.component';
import { TournamentBracketComponent } from './tournament-bracket/tournament-bracket.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TeamCreationComponent } from './team-creation/team-creation.component';

const routes: Routes = [

  { path: 'team/:id',  component: TeamCreationComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    TournamentBracketComponent,
    NavBarComponent,
    TeamCreationComponent
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
