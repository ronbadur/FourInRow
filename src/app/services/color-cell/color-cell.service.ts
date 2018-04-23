import { Injectable } from '@angular/core';
import { GameBoard } from '../../models/GameBoard';

@Injectable()
export class ColorCellService {

  constructor() { }

  public colorTheLowestWhiteCellInColumn(gameBoard: GameBoard, column: number, color: string) {
    let isCellGotColored = false;

    for (let i = gameBoard.grid.length - 1; i >= 0 && !isCellGotColored; i--) {
      if (gameBoard.grid[i][column].color === 'white') {
        gameBoard.grid[i][column].color = color;
        isCellGotColored = true;
      }
    }

    return isCellGotColored;
  }

}
