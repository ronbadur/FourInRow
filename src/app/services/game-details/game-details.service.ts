import {Injectable, OnInit} from '@angular/core';
import { GameDetails } from '../../models/GameDetails';

@Injectable()
export class GameDetailsService implements OnInit {

  public gameDetails: GameDetails;

  constructor() { }

  ngOnInit() {
    this.gameDetails = new GameDetails('', '');
  }

}
