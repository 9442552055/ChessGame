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
            if (this.__chesscoins[a].ChessCoinPosition.Row == position.Row
                && this.__chesscoins[a].ChessCoinPosition.Column == position.Column) {
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

    GetKingsMovements(kingsP: ChessPosition, kingsColor: ChessColor): ChessPosition[] {
        var places: ChessPosition[] = [];
        var p1 = new ChessPosition(kingsP.Row + 1, kingsP.Column);
        var p2 = new ChessPosition(kingsP.Row - 1, kingsP.Column);
        var p3 = new ChessPosition(kingsP.Row, kingsP.Column + 1);
        var p4 = new ChessPosition(kingsP.Row, kingsP.Column - 1);
        var p5 = new ChessPosition(kingsP.Row + 1, kingsP.Column + 1);
        var p6 = new ChessPosition(kingsP.Row + 1, kingsP.Column - 1);
        var p7 = new ChessPosition(kingsP.Row - 1, kingsP.Column + 1);
        var p8 = new ChessPosition(kingsP.Row - 1, kingsP.Column - 1);
        places = [p1, p2, p3, p4, p5, p6, p7, p8];
        for (var s = places.length - 1; s > -1; s--) {
            if (places[s].Row > 7 || places[s].Row < 0 || places[s].Column > 7 || places[s].Column < 0) {
                places.splice(s, 1);
            }
            else {
                var coinInPath = this.GetCoinIfExists(places[s]);
                if (coinInPath && coinInPath.Color == kingsColor) {
                    places.splice(s, 1);
                }
            }
        }
        return places;
    }

    __checkDiagonalPlaces(p: ChessPosition, coinColor: ChessColor, row: number, col: number): boolean {
        var places: ChessPosition[] = [];
        this.AddDiagonalMovements(p, row, col, coinColor, places)
        if (places.length) {
            var opponentcoin = this.GetCoinIfExists(places[places.length - 1]);
            if (opponentcoin.Name == 'bishop' || opponentcoin.Name == 'queen') {
                return false;
            }
            if (opponentcoin.Name == 'solider' || opponentcoin.Name == 'king' && places.length == 1) {
                return false;
            }
        }
        return true;
    }

    __checkLinearPlaces(p: ChessPosition, type: string, val: number, coinColor: ChessColor, ): boolean {
        var places: ChessPosition[] = [];
        this.AddLinearMovements(p, type, val, coinColor, places)
        if (places.length) {
            var opponentcoin = this.GetCoinIfExists(places[places.length - 1]);
            if (opponentcoin.Name == 'tower' || opponentcoin.Name == 'queen') {
                return false;
            }
            if (opponentcoin.Name == 'king' && places.length == 1) {
                return false;
            }
        }
        return true;
    }

    __checkJumperPlaces(p: ChessPosition, val1: number, val2: number, color: ChessColor): boolean {
        var places = []
        this.AddJumpMovements(p, val1, val2, color, places)
        if (places.length) {
            var opponentcoin = this.GetCoinIfExists(places[places.length - 1]);
            if (opponentcoin.Name == 'horse') {
                return false;
            }
        }
        return true;
    }

    IsCoinSafe(coinP: ChessPosition, coinColor: ChessColor): boolean {
        //TODO: think of parallel executions
        //is our king 8 directions open 
        if (!this.__checkDiagonalPlaces(coinP, coinColor, 1, 1)) {
            return false;
        }
        if (!this.__checkDiagonalPlaces(coinP, coinColor, 1, -1)) {
            return false;
        }
        if (!this.__checkDiagonalPlaces(coinP, coinColor, -1, 1)) {
            return false;
        }
        if (!this.__checkDiagonalPlaces(coinP, coinColor, -1, -1)) {
            return false;
        }
        if (!this.__checkLinearPlaces(coinP, "Row", 1, coinColor)) {
            return false;
        }
        if (!this.__checkLinearPlaces(coinP, "Row", -1, coinColor)) {
            return false;
        }
        if (!this.__checkLinearPlaces(coinP, "Column", 1, coinColor)) {
            return false;
        }
        if (!this.__checkLinearPlaces(coinP, "Column", -1, coinColor)) {
            return false;
        }
        // have to check is opponent horses positions cause check
        if (!this.__checkJumperPlaces(coinP, -1, 2, coinColor)) {
            return false;
        }
        if (!this.__checkJumperPlaces(coinP, -1, -2, coinColor)) {
            return false;
        }
        if (!this.__checkJumperPlaces(coinP, -1, 2, coinColor)) {
            return false;
        }
        if (!this.__checkJumperPlaces(coinP, 1, -2, coinColor)) {
            return false;
        }

        if (!this.__checkJumperPlaces(coinP, 2, 1, coinColor)) {
            return false;
        }
        if (!this.__checkJumperPlaces(coinP, -2, -1, coinColor)) {
            return false;
        }
        if (!this.__checkJumperPlaces(coinP, -2, 1, coinColor)) {
            return false;
        }
        if (!this.__checkJumperPlaces(coinP, 2, -1, coinColor)) {
            return false;
        }
        return true;
    }
}

export default ChesscoinService;