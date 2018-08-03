import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TournamentBracketComponent } from './tournament-bracket/tournament-bracket.component';

@NgModule({
  declarations: [
    AppComponent,
    TournamentBracketComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
