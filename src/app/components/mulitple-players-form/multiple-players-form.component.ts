import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameDetailsService } from '../../services/game-details/game-details.service';
import { GameDetails } from '../../models/GameDetails';

@Component({
  selector: 'app-player-name-form',
  templateUrl: './multiple-players-form.component.html',
  styleUrls: ['./multiple-players-form.component.css']
})
export class MultiplePlayersFormComponent implements OnInit {

  constructor(private router: Router, private gameDetailsService: GameDetailsService) {
  }

  ngOnInit() {
  }

  public onSubmit(firstPlayer: string, secondPlayer: string) {
    this.gameDetailsService.gameDetails = new GameDetails(firstPlayer, secondPlayer);

    this.router.navigateByUrl('/startGame');
  }

  public OnBackClick() {
    this.router.navigateByUrl('/gameOptions');
  }

}
