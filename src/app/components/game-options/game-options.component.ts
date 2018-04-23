import { Component, OnInit } from '@angular/core';
import {Route, Router} from '@angular/router';

@Component({
  selector: 'app-game-options',
  templateUrl: './game-options.component.html',
  styleUrls: ['./game-options.component.css']
})
export class GameOptionsComponent implements OnInit {

  title = 'Start Game';
  gameOptions: string[] = [];

  constructor() { }

  ngOnInit() {
    this.gameOptions.push('Player vs Player', 'Player vs Computer');
  }
}
