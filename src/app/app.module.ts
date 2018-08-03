import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { RouterModule, Routes} from "@angular/router"
import { HttpModule } from '../../node_modules/@angular/http';
import { UserService } from './services/user.service';

import { AppComponent } from './app.component';
import { TournamentBracketComponent } from './tournament-bracket/tournament-bracket.component';
import { TournamentComponent } from './tournament/tournament.component';
import { TournamentCreateComponent } from './tournament/tournament-create/tournament-create.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { UsersComponentComponent } from './users/users-component/users-component.component';

const routes: Routes = [

  {path: 'signup', component: UsersComponentComponent}




]




@NgModule({
  declarations: [
    AppComponent,
    TournamentBracketComponent,
    TournamentComponent,
    TournamentCreateComponent,
    NavBarComponent,
    UsersComponentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
