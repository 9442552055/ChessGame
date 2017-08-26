import { Injectable } from '@angular/core';
import { ChessColor } from '../ChessColor';
import { ChessPosition } from '../ChessPosition';
import { AbstractChessCoin } from "./AbstractChessCoin";


@Injectable()
export class ChesscoinService {
    private __chesscoins: AbstractChessCoin[] = [];


    AddChessCoin(coin: AbstractChessCoin): void {
        this.__chesscoins.push(coin);
    }

    RemoveChessCoin(coin: AbstractChessCoin): void {
        for (var a = 0; a < this.__chesscoins.length; a++) {
            if (this.__chesscoins[a].__id == coin.__id) {
                this.__chesscoins.splice(a, 1);
                return;
            }
        }
    }

    GetCoinIfExists(position: ChessPosition): AbstractChessCoin {
        for (var a = 0; a < this.__chesscoins.length; a++) {
            if (this.__chesscoins[a].ChessCellPosition.Row == position.Row
                && this.__chesscoins[a].ChessCellPosition.Column == position.Column) {
                return this.__chesscoins[a];
            }
        }
    }

    AddLinearMovements(p: ChessPosition, type: string, val: number, MyColor: ChessColor, places: ChessPosition[]): void {
        if ((p[type] < 7 && val == 1) || (val == -1 && p[type] > 0)) {
            var newP = { ...p };
            newP[type] = newP[type] + val;
            var coinInPath = this.GetCoinIfExists(newP);
            if (!coinInPath) {
                places.push(newP);
                this.AddLinearMovements(newP, type, val, MyColor, places);
            }
            else if (coinInPath.Color != MyColor) {
                places.push(newP);
            }
        }

    }

    AddDiagonalMovements(p: ChessPosition, row: number, col: number, MyColor: ChessColor, places: ChessPosition[]): void {
        if (((p.Column < 7 && col == 1) || (col == -1 && p.Column > 0))
            && ((p.Row < 7 && row == 1) || (row == -1 && p.Row > 0))) {
            var newP = { ...p };
            newP.Row = newP.Row + row;
            newP.Column = newP.Column + col;
            var coinInPath = this.GetCoinIfExists(newP);
            if (!coinInPath) {
                places.push(newP);
                this.AddDiagonalMovements(newP, row, col, MyColor, places);
            }
            else if (coinInPath.Color != MyColor) {
                places.push(newP);
            }
        }
    }

    AddJumpMovements(p: ChessPosition, row: number, col: number, MyColor: ChessColor, places: ChessPosition[]): void {
        var newP = { ...p };
        newP.Row = newP.Row + row;
        newP.Column = newP.Column + col;
        if (newP.Row <= 7 && newP.Row >= 0 && newP.Column <= 7 && newP.Column >= 0) {
            var coinInPath = this.GetCoinIfExists(newP);
            if (!coinInPath || coinInPath.Color != MyColor) {
                places.push(newP);
            }
        }
    }
}

export default ChesscoinService;