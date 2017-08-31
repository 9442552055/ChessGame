// import { Injectable } from '@angular/core';
// @Injectable()
import { ChessPosition, AbstractChessCoin } from "./";

export interface IChessboardCell {
    ChessCellPosition: ChessPosition;
    CurrentCoin: AbstractChessCoin;
    IsSelected: boolean;
    IsCoinShiftable: boolean;
    IsCoinLocked: boolean;
}
export default IChessboardCell;