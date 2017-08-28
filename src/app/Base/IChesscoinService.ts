// import { Injectable } from '@angular/core';
// @Injectable()
import { AbstractChessCoin } from "./AbstractChessCoin";
import { ChessPosition } from "./ChessPosition";
import { ChessColor } from "./ChessColor";

export interface IChesscoinService {
    AddChessCoin(coin: AbstractChessCoin): void;
    RemoveChessCoin(coin: AbstractChessCoin, oldPosition: ChessPosition): void;
    GetCoinIfExists(position: ChessPosition): AbstractChessCoin;
    AddLinearMovements(p: ChessPosition, type: string, val: number, MyColor: ChessColor, places: ChessPosition[]): void;
    AddDiagonalMovements(p: ChessPosition, row: number, col: number, MyColor: ChessColor, places: ChessPosition[]): void;
    AddJumpMovements(p: ChessPosition, row: number, col: number, MyColor: ChessColor, places: ChessPosition[]): void;
    GetKingsMovements(kingsP: ChessPosition, kingsColor: ChessColor): ChessPosition[];
    IsKingSafe(coinColor: ChessColor): boolean;
    IsOtherKingSafe(coinColor: ChessColor): boolean;
}
export default IChesscoinService;