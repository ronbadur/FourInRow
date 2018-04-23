export class Cell {
  row: number;
  column: number;
  color: string;


  constructor(row: number, column: number, color: string) {
    this.row = row;
    this.column = column;
    this.color = color;
  }
}
