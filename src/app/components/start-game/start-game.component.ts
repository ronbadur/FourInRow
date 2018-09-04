import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {GameBoard} from '../../models/GameBoard';
import {Cell} from '../../models/Cell';
import {GameResultService} from '../../services/game-result/game-result.service';
import {ColorCellService} from '../../services/color-cell/color-cell.service';
import {RoundResult} from '../../models/RoundResult';
import {GameDetailsService} from '../../services/game-details/game-details.service';


@Component({
  selector: 'app-start-game',
  templateUrl: './start-game.component.html',
  styleUrls: ['./start-game.component.css']
})
export class StartGameComponent implements OnInit {

  gameBoard: GameBoard;
  currentColor = 'red';
  winner: string;
  isGameEnd = false;

  constructor(private router: Router, private gameResultService: GameResultService,
              private colorCell: ColorCellService, private gameDetails: GameDetailsService) {
  }

  ngOnInit() {
    this.gameBoard = new GameBoard();
  }

  public onCellClick(cell: Cell) {
    if (!this.isGameEnd) {
     this.colorCell.colorTheLowestWhiteCellInColumn(this.gameBoard, cell.column, this.currentColor)
                   .subscribe((data: RoundResult) => {
                      this.gameBoard = data.gameBoard;
                      this.checkIfThereIsWinner(data.isCellGotColored);
                   });
    }
  }

  public checkIfThereIsWinner(isCellGotColored: boolean) {
    if (isCellGotColored) {
      const gameResult = this.gameResultService.areFourConnected(this.gameBoard, this.currentColor);

      if (gameResult) {
        this.winner = this.currentColor;
        this.isGameEnd = true;
      }

      // Change the color for next turn
      this.currentColor = this.currentColor === 'red' ? 'black' : 'red';

      if (!this.isGameEnd && this.gameDetails.gameDetails.secondPlayer === 'Computer' && this.currentColor === 'black') {
         this.doComputerTurn();
      }
    }
  }

  public getCellColor(column: Cell): string {
    return column.color;
  }

  public newGame() {
    this.gameBoard = new GameBoard();
    this.isGameEnd = false;
    this.winner = undefined;
  }

  public backToHome() {
    this.router.navigateByUrl('/gameOptions');
  }

  private doComputerTurn() {
    this.colorCell.colorBestPlaceForComputer(this.gameBoard, this.currentColor)
      .subscribe((data: RoundResult) => {
        this.gameBoard = data.gameBoard;
        this.checkIfThereIsWinner(data.isCellGotColored);
      });
  }

}
