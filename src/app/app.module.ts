import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TournamentBracketComponent } from './tournament-bracket/tournament-bracket.component';
import { TournamentComponent } from './tournament/tournament.component';
import { TournamentCreateComponent } from './tournament/tournament-create/tournament-create.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TournamentService } from './services/tournament.service';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';

// sample inside route array   {path: 'api/tasks/delete/:id', component: TodoListComponent}
const routes: Routes = [
  { path: 'tournament/create', component: TournamentCreateComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    TournamentBracketComponent,
    TournamentComponent,
    TournamentCreateComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [TournamentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
