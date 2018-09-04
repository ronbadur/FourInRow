import { Injectable } from '@angular/core';
import { GameBoard } from '../../models/GameBoard';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {RoundResult} from '../../models/RoundResult';

@Injectable()
export class ColorCellService {

  constructor(private http: HttpClient) { }

  public colorTheLowestWhiteCellInColumn(gameBoard: GameBoard, column: number, color: string): Observable<RoundResult> {
    return this.http.post<RoundResult>('http://localhost:8080/colorTheLowestWhiteCellInColumn',
                              {'gameBoard': gameBoard, 'column': column, 'color': color});
  }

  public colorBestPlaceForComputer(gameBoard: GameBoard, color: string): Observable<RoundResult> {
    return this.http.post<RoundResult>('http://localhost:8080/colorBestPlaceForComputer',
      {'gameBoard': gameBoard, 'column': null, 'color': color});
  }

}
