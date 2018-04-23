import {Injectable} from '@angular/core';
import {GameBoard} from '../../models/GameBoard';

@Injectable()
export class GameResultService {

  public areFourConnected(gameBoard: GameBoard, color: string): boolean {
      // horizontal check
      for (let i = 0; i < gameBoard.grid.length; i++ ) {
        for (let j = 0; j < gameBoard.grid[0].length - 3; j++) {
          if (gameBoard.grid[i][j].color === color && gameBoard.grid[i][j + 1].color === color &&
              gameBoard.grid[i][j + 2].color === color && gameBoard.grid[i][j + 3].color === color) {
            return true;
          }
        }
      }

      // vertical check
      for (let j = 0; j < gameBoard.grid[0].length; j++ ) {
        for (let i = 0; i < gameBoard.grid.length - 3; i++) {
          if (gameBoard.grid[i][j].color === color && gameBoard.grid[i + 1][j].color === color &&
              gameBoard.grid[i + 2][j].color === color && gameBoard.grid[i + 3][j].color === color) {
            return true;
          }
        }
      }

      // ascending diagonal check
      for (let i = 3; i < gameBoard.grid.length; i++) {
        for (let j = 0; j < gameBoard.grid[0].length - 3; j++) {
          if (gameBoard.grid[i][j].color === color && gameBoard.grid[i - 1][j + 1].color === color &&
              gameBoard.grid[i - 2][j + 2].color === color && gameBoard.grid[i - 3][j + 3].color === color) {
            return true;
          }
        }
      }

      // descending diagonal check
      for (let i = 3; i < gameBoard.grid.length; i++) {
        for (let  j = 3; j < gameBoard.grid[0].length; j++) {
          if (gameBoard.grid[i][j].color === color && gameBoard.grid[i - 1][j - 1].color === color &&
              gameBoard.grid[i - 2][j - 2].color === color && gameBoard.grid[i - 3][j - 3].color === color) {
            return true;
          }
        }
      }

      return false;
    }

}
