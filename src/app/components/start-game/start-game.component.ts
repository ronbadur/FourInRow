import {Component, OnInit} from '@angular/core';

import {GameBoard} from '../../models/GameBoard';
import {Cell} from '../../models/Cell';
import {GameResultService} from '../../services/game-result/game-result.service';
import {ColorCellService} from '../../services/color-cell/color-cell.service';

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

  constructor(private gameResultService: GameResultService, private colorCell: ColorCellService) {
  }

  ngOnInit() {
    this.gameBoard = new GameBoard();
  }

  public onCellClick(cell: Cell) {
    if (!this.isGameEnd) {
      const isCellGotColored = this.colorCell.colorTheLowestWhiteCellInColumn(this.gameBoard, cell.column, this.currentColor);

      if (isCellGotColored) {
        const gameResult = this.gameResultService.areFourConnected(this.gameBoard, this.currentColor);

        if (gameResult) {
          this.winner = this.currentColor;
          this.isGameEnd = true;
        }

        // Change the color for next turn
        this.currentColor = this.currentColor === 'red' ? 'black' : 'red';
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
}
