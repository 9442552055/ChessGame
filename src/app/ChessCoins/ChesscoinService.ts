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
}

export default ChesscoinService;