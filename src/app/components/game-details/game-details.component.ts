import { Component, OnInit } from '@angular/core';
import { GameDetailsService } from '../../services/game-details/game-details.service';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css']
})
export class GameDetailsComponent implements OnInit {

  firstPlayer: string;
  secondPlayer: string;

  constructor(private gameDetailsService: GameDetailsService) {
    this.firstPlayer = gameDetailsService.gameDetails.firstPlayer;
    this.secondPlayer = gameDetailsService.gameDetails.secondPlayer;
  }

  ngOnInit() {
  }

}
