import { Component } from '@angular/core';


enum ChessColor { black, white }

class ChessPosition {
  Row: number;
  Column: number;
  constructor(row: number, column: number) {
    this.Row = row;
    this.Column = column;
  }
  get Color() {
    return ((this.Row + this.Column) % 2) == 1 ? ChessColor.black : ChessColor.white;
  }
}

class ChessPlaceHolder {
  CurrentCoin: ChessCoin;
  Position: ChessPosition;
  OnClick: () => void;
  constructor(position: ChessPosition) {
    this.Position = position;
  }
}

abstract class ChessCoin {
  private _color: ChessColor;
  private _code: String;

  constructor(_color: ChessColor, _code: String) {
    this._color = _color;
    this._code=_code;
  }

  get Color() {
    return this._color;
  }
  get Code(){
    return this._code;
  }
  abstract GetShiftablePlaces(): ChessPosition[];
}


class Solider extends ChessCoin {
  constructor(_color: ChessColor) {
    super(_color,_color==ChessColor.black?"&#9823;":"&#9817;");
  }
  public GetShiftablePlaces() {
    return [];
  }
}

class Horse extends ChessCoin {
  constructor(_color: ChessColor) {
    super(_color,_color==ChessColor.black?"&#9822;":"&#9816;");
  }
  GetShiftablePlaces(): ChessPosition[] {
    throw new Error("Method not implemented.");
  }

}

class Tower extends ChessCoin {
  constructor(_color: ChessColor) {
    super(_color,_color==ChessColor.black?"&#9820;":"&#9814;");
  }
  GetShiftablePlaces(): ChessPosition[] {
    throw new Error("Method not implemented.");
  }

}

class Bishop extends ChessCoin {
  constructor(_color: ChessColor) {
    super(_color,_color==ChessColor.black?"&#9820;":"&#9814;");
  }
  GetShiftablePlaces(): ChessPosition[] {
    throw new Error("Method not implemented.");
  }

}

class King extends ChessCoin {
  constructor(_color: ChessColor) {
    super(_color,_color==ChessColor.black?">&#9819;":"&#9814;");
  }
  GetShiftablePlaces(): ChessPosition[] {
    throw new Error("Method not implemented.");
  }
}

class Queen extends ChessCoin {
  constructor(_color: ChessColor) {
    super(_color,_color==ChessColor.black?"&#9818;":"&#9814;");
  }
  GetShiftablePlaces(): ChessPosition[] {
    throw new Error("Method not implemented.");
  }
}

interface IChessCoinShiftable {
  ShiftCoinPlace: (coin: ChessCoin, placeholder: ChessPlaceHolder) => ChessPosition;
}

class ChessCoinShifter implements IChessCoinShiftable {
  ShiftCoinPlace = function (coin: ChessCoin, placeholder: ChessPlaceHolder) {
    return new ChessPosition(0, 0);
  }
}

@Component({
  selector: 'chess-board',
  templateUrl: './chessboard.component.html',
  styleUrls: ['./chessboard.component.css']
})
export class ChessboardComponent {

  PlaceHolders: ChessPlaceHolder[][] = [];

  constructor() {
    for (var row = 0; row < 8; row++) {
      var rowHolder: ChessPlaceHolder[] = [];
      for (var col = 0; col < 8; col++) {
        rowHolder.push(new ChessPlaceHolder(new ChessPosition(row,col)));
      }
      this.PlaceHolders.push(rowHolder);
    }

    //load black tower
    this.PlaceHolders[0][0].CurrentCoin = new Tower(ChessColor.black);
    this.PlaceHolders[0][7].CurrentCoin = new Tower(ChessColor.black);
    //load white tower
    this.PlaceHolders[7][0].CurrentCoin = new Tower(ChessColor.white);
    this.PlaceHolders[7][7].CurrentCoin = new Tower(ChessColor.white);

     //load black horse
    this.PlaceHolders[0][1].CurrentCoin = new Horse(ChessColor.black);
    this.PlaceHolders[0][6].CurrentCoin = new Horse(ChessColor.black);
    //load white horse
    this.PlaceHolders[7][1].CurrentCoin = new Horse(ChessColor.white);
    this.PlaceHolders[7][6].CurrentCoin = new Horse(ChessColor.white);

    //load black bishop
    this.PlaceHolders[0][2].CurrentCoin = new Bishop(ChessColor.black);
    this.PlaceHolders[0][5].CurrentCoin = new Bishop(ChessColor.black);
    //load white bishop
    this.PlaceHolders[7][2].CurrentCoin = new Bishop(ChessColor.white);
    this.PlaceHolders[7][5].CurrentCoin = new Bishop(ChessColor.white);

    //load black Queen
    this.PlaceHolders[0][3].CurrentCoin = new Queen(ChessColor.black);
    //load black King
    this.PlaceHolders[0][4].CurrentCoin = new King(ChessColor.black);
    //load White Queen
    this.PlaceHolders[0][3].CurrentCoin = new Queen(ChessColor.white);
    //load White King
    this.PlaceHolders[0][4].CurrentCoin = new King(ChessColor.white);
  }
}
