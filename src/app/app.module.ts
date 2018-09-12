import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GameOptionsComponent } from './components/game-options/game-options.component';
import { MultiplePlayersFormComponent } from './components/mulitple-players-form/multiple-players-form.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { StartGameComponent } from './components/start-game/start-game.component';
import {GameDetailsService} from './services/game-details/game-details.service';
import { SinglePlayerFormComponent } from './components/single-player-form/single-player-form.component';
import { GameResultService } from './services/game-result/game-result.service';
import { GameDetailsComponent } from './components/game-details/game-details.component';
import { ColorCellService } from './services/color-cell/color-cell.service';
import { NamePipe } from './pipes/name.pipe';
import { InstructionsComponent } from './components/instructions/instructions.component';

const appRoutes: Routes = [
  {
    path: 'multiplePlayersNameForm',
    component: MultiplePlayersFormComponent,
  },
  {
    path: 'singlePlayerNameForm',
    component: SinglePlayerFormComponent,
  },
  {
    path: 'instructions',
    component: InstructionsComponent,
  },
  {
    path: 'gameOptions',
    component: GameOptionsComponent,
  },
  {
    path: 'startGame',
    component: StartGameComponent,
  },
  { path: '',
    redirectTo: '/gameOptions',
    pathMatch: 'full'
  },
  { path: '**',
    component: PageNotFoundComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    GameOptionsComponent,
    MultiplePlayersFormComponent,
    PageNotFoundComponent,
    StartGameComponent,
    SinglePlayerFormComponent,
    GameDetailsComponent,
    NamePipe,
    InstructionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [GameDetailsService, GameResultService, ColorCellService],
  bootstrap: [AppComponent]
})
export class AppModule { }
