// import { Injectable } from '@angular/core';
// @Injectable()
import { ChessPosition } from "./ChessPosition";
import { AbstractChessCoin } from "./AbstractChessCoin";

export interface ICoinInitializer {
    //LoadCoin(cell: IChessboardCell): void;
    LoadCoin(cell: ChessPosition): AbstractChessCoin;
}
export default ICoinInitializer;