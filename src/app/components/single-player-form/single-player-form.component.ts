import { Component, OnInit } from '@angular/core';
import { GameDetails } from '../../models/GameDetails';
import { Router } from '@angular/router';
import { GameDetailsService } from '../../services/game-details/game-details.service';

@Component({
  selector: 'app-single-player-form',
  templateUrl: './single-player-form.component.html',
  styleUrls: ['./single-player-form.component.css']
})
export class SinglePlayerFormComponent implements OnInit {

  constructor(private router: Router, private gameDetailsService: GameDetailsService) {
  }

  ngOnInit() {
  }

  public onSubmit(firstPlayer: string) {
    this.gameDetailsService.gameDetails = new GameDetails(firstPlayer, 'Computer');

    this.router.navigateByUrl('/startGame');
  }

  public OnBackClick() {
    this.router.navigateByUrl('/gameOptions');
  }
}
