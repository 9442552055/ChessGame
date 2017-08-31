import { Component, Inject } from '@angular/core';
import { ChessPosition, ICoinInitializer, AbstractChessCoin } from '../Base';

@Component({
  selector: 'chess-board',
  templateUrl: './ChessboardComponent.html',
  styleUrls: ['./Chessboard.css']
})
export class ChessboardComponent {

  PlaceHolders: ChessPosition[][] = [];
  Coins: AbstractChessCoin[] = [];
  private __coinInitializer: ICoinInitializer
  constructor( @Inject('ICoinInitializer') private coinInitializer: ICoinInitializer) {
    this.__coinInitializer = coinInitializer;
    //Load 8 x 8 = 64 Cell - matrix
    for (var row = 0; row < 8; row++) {
      var rowHolder: ChessPosition[] = [];
      for (var col = 0; col < 8; col++) {
        var p = new ChessPosition(row, col)
        rowHolder.push(p);
        var c:AbstractChessCoin = this.__coinInitializer.LoadCoin(p);
        if (c) {
          this.Coins.push(c);
        }
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
