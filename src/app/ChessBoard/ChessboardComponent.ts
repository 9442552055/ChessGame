import { Component } from '@angular/core';
import { ChessPosition } from '../Base';

@Component({
  selector: 'chess-board',
  templateUrl: './ChessboardComponent.html',
  styleUrls: ['./Chessboard.css']
})
export class ChessboardComponent {

  PlaceHolders: ChessPosition[][] = [];

  constructor() {
    //Load 8 x 8 = 64 Cell - matrix
    for (var row = 0; row < 8; row++) {
      var rowHolder: ChessPosition[] = [];
      for (var col = 0; col < 8; col++) {
        rowHolder.push(new ChessPosition(row, col));
      }
      this.PlaceHolders.push(rowHolder);
    }
  }
}

//import ChessboardCell from './ChessboardCell';
//import AbstractChessCoin from './ChessCoins/AbstractChessCoin';
// interface IChessCoinShiftable {
//   ShiftCoinPlace: (coin: AbstractChessCoin, placeholder: ChessboardCell) => ChessPosition;
// }

// class ChessCoinShifter implements IChessCoinShiftable {
//   ShiftCoinPlace = function (coin: AbstractChessCoin, placeholder: ChessboardCell) {
//     return new ChessPosition(0, 0);
//   }
// }
