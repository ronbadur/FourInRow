import {GameBoard} from './GameBoard';

export class RoundResult {
  private _gameBoard: GameBoard;
  private cellGotColored: boolean;


  constructor(gameBoard: GameBoard, isCellGotColored: boolean) {
    this._gameBoard = gameBoard;
    this.cellGotColored = isCellGotColored;
  }


  get gameBoard(): GameBoard {
    return this._gameBoard;
  }

  get isCellGotColored(): boolean {
    return this.cellGotColored;
  }
}
