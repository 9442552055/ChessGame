import { Component } from '@angular/core';

import ChessCoinPlaceHolder from './ChessCoinPlaceHolder';
import ChessCoin from './ChessCoins/ChessCoin';
import ChessPosition from './ChessCoins/ChessPosition';

// interface IChessCoinShiftable {
//   ShiftCoinPlace: (coin: ChessCoin, placeholder: ChessCoinPlaceHolder) => ChessPosition;
// }

// class ChessCoinShifter implements IChessCoinShiftable {
//   ShiftCoinPlace = function (coin: ChessCoin, placeholder: ChessCoinPlaceHolder) {
//     return new ChessPosition(0, 0);
//   }
// }

@Component({
  selector: 'chess-board',
  templateUrl: './chessboard.component.html',
  styleUrls: ['./chessboard.component.css']
})
export class ChessboardComponent {

  PlaceHolders: ChessPosition[][] = [];

  constructor() {
    for (var row = 0; row < 8; row++) {
      var rowHolder: ChessPosition[] = [];
      for (var col = 0; col < 8; col++) {
        rowHolder.push(new ChessPosition(row,col));
      }
      this.PlaceHolders.push(rowHolder);
    }

    // //load black tower
    // this.PlaceHolders[0][0].CurrentCoin ='b-tower';
    // this.PlaceHolders[0][7].CurrentCoin ='b-tower';
    // //load white tower
    // this.PlaceHolders[7][0].CurrentCoin ='w-tower';
    // this.PlaceHolders[7][7].CurrentCoin ='w-tower';

    //  //load black horse
    // this.PlaceHolders[0][1].CurrentCoin ='b-horse';
    // this.PlaceHolders[0][6].CurrentCoin ='b-horse';
    // //load white horse
    // this.PlaceHolders[7][1].CurrentCoin ='w-horse';
    // this.PlaceHolders[7][6].CurrentCoin ='w-horse';

    // //load black bishop
    // this.PlaceHolders[0][2].CurrentCoin ='b-bishop';
    // this.PlaceHolders[0][5].CurrentCoin ='b-bishop';
    // //load white bishop
    // this.PlaceHolders[7][2].CurrentCoin ='w-bishop';
    // this.PlaceHolders[7][5].CurrentCoin ='w-bishop';

    // //load black Queen
    // this.PlaceHolders[0][3].CurrentCoin ='b-queen';
    // //load black King
    // this.PlaceHolders[0][4].CurrentCoin ='b-king';
    // //load White Queen
    // this.PlaceHolders[0][3].CurrentCoin ='w-queen';
    // //load White King
    // this.PlaceHolders[0][4].CurrentCoin ='w-king';

    // //load black tower
    // this.PlaceHolders[0][0].CurrentCoin = new Tower(ChessColor.black);
    // this.PlaceHolders[0][7].CurrentCoin = new Tower(ChessColor.black);
    // //load white tower
    // this.PlaceHolders[7][0].CurrentCoin = new Tower(ChessColor.white);
    // this.PlaceHolders[7][7].CurrentCoin = new Tower(ChessColor.white);

    //  //load black horse
    // this.PlaceHolders[0][1].CurrentCoin = new Horse(ChessColor.black);
    // this.PlaceHolders[0][6].CurrentCoin = new Horse(ChessColor.black);
    // //load white horse
    // this.PlaceHolders[7][1].CurrentCoin = new Horse(ChessColor.white);
    // this.PlaceHolders[7][6].CurrentCoin = new Horse(ChessColor.white);

    // //load black bishop
    // this.PlaceHolders[0][2].CurrentCoin = new Bishop(ChessColor.black);
    // this.PlaceHolders[0][5].CurrentCoin = new Bishop(ChessColor.black);
    // //load white bishop
    // this.PlaceHolders[7][2].CurrentCoin = new Bishop(ChessColor.white);
    // this.PlaceHolders[7][5].CurrentCoin = new Bishop(ChessColor.white);

    // //load black Queen
    // this.PlaceHolders[0][3].CurrentCoin = new Queen(ChessColor.black);
    // //load black King
    // this.PlaceHolders[0][4].CurrentCoin = new King(ChessColor.black);
    // //load White Queen
    // this.PlaceHolders[0][3].CurrentCoin = new Queen(ChessColor.white);
    // //load White King
    // this.PlaceHolders[0][4].CurrentCoin = new King(ChessColor.white);
  }
}
