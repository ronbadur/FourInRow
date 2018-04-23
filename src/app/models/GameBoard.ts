import {Cell} from './Cell';

export class GameBoard {
  grid = [
    [],
    [],
    [],
    [],
    [],
  ];

  constructor() {
    for (let i = 0; i < this.grid.length; i++) {
      for (let j = 0; j < 7; j++) {
        this.grid[i].push(new Cell(i, j, 'white'));
      }
    }
  }
}
