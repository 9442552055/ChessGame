import { Injectable } from '@angular/core';
import { ChessColor, ChessPosition, AbstractChessCoin, IChesscoinService } from '../Base';

@Injectable()
export class ChesscoinService implements IChesscoinService {
    
    private __chesscoins: AbstractChessCoin[] = [];
    //private __coinsHash: any = {};
    private __kings: any = {}

    AddChessCoin(coin: AbstractChessCoin): void {
        this.__chesscoins.push(coin);
        // if (!this.__coinsHash[coin.ChessCoinPosition.Row]) {
        //     this.__coinsHash[coin.ChessCoinPosition.Row] = {};
        // }
        // this.__coinsHash[coin.ChessCoinPosition.Row][coin.ChessCoinPosition.Column] = coin;
        if (coin.Name == 'king') {
            this.__kings[coin.Color] = coin;
        }
    }

    RemoveChessCoin(coin: AbstractChessCoin, oldPosition: ChessPosition): void {
        //this.__coinsHash[oldPosition.Row][oldPosition.Column] = undefined;
        for (var a = 0; a < this.__chesscoins.length; a++) {
            if (this.__chesscoins[a].ChessCoinPosition.Row == coin.ChessCoinPosition.Row
                && this.__chesscoins[a].ChessCoinPosition.Column == coin.ChessCoinPosition.Column) {
                this.__chesscoins.splice(a, 1);
                return;
            }

            // if (this.__chesscoins[a].__id == coin.__id) { //id search cause wierd results dont know why
            //     this.__chesscoins.splice(a, 1);
            //     return;
            // }
        }
    }

    GetCoinIfExists(position: ChessPosition): AbstractChessCoin {
        for (var a = 0; a < this.__chesscoins.length; a++) {
            if (this.__chesscoins[a].ChessCoinPosition.Row == position.Row
                && this.__chesscoins[a].ChessCoinPosition.Column == position.Column) {
                return this.__chesscoins[a];
            }
        }
        return undefined;
        // return this.__coinsHash[position.Row] ? this.__coinsHash[position.Row][position.Column] : undefined;
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

    private __checkDiagonalPlaces(p: ChessPosition, coinColor: ChessColor, row: number, col: number): boolean {
        var places: ChessPosition[] = [];
        this.AddDiagonalMovements(p, row, col, coinColor, places)
        if (places.length) {
            var opponentcoin = this.GetCoinIfExists(places[places.length - 1]);
            if (opponentcoin && (opponentcoin.Name == 'bishop' || opponentcoin.Name == 'queen')) {
                return false;
            }
            if (opponentcoin && ((opponentcoin.Name == 'solider' || opponentcoin.Name == 'king') && places.length == 1)) {
                return false;
            }
        }
        return true;
    }

    private __checkLinearPlaces(p: ChessPosition, type: string, val: number, coinColor: ChessColor, ): boolean {
        var places: ChessPosition[] = [];
        this.AddLinearMovements(p, type, val, coinColor, places)
        if (places.length) {
            var opponentcoin = this.GetCoinIfExists(places[places.length - 1]);
            if (opponentcoin && (opponentcoin.Name == 'tower' || opponentcoin.Name == 'queen')) {
                return false;
            }
            if (opponentcoin && (opponentcoin.Name == 'king' && places.length == 1)) {
                return false;
            }
        }
        return true;
    }

    private __checkJumperPlaces(p: ChessPosition, val1: number, val2: number, color: ChessColor): boolean {
        var places = []
        this.AddJumpMovements(p, val1, val2, color, places)
        if (places.length) {
            var opponentcoin = this.GetCoinIfExists(places[places.length - 1]);
            if (opponentcoin && opponentcoin.Name == 'horse') {
                return false;
            }
        }
        return true;
    }

    private __isCoinSafe(coinP: ChessPosition, coinColor: ChessColor): boolean {
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
        if (!this.__checkJumperPlaces(coinP, 1, 2, coinColor)) {
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

    IsKingSafe(coinColor: ChessColor): boolean {

        if (this.__kings && this.__kings[coinColor]) {
            return this.__isCoinSafe(this.__kings[coinColor].ChessCoinPosition, coinColor);
        }
        return false;
    }

    IsOtherKingSafe(coinColor: ChessColor): boolean {
        var temp: AbstractChessCoin[] = [];
        for (var key in this.__kings) {
            temp.push(this.__kings[key]);
        }
        for (var a = 0; a < temp.length; a++) {
            if (temp[a].Color != coinColor) {
                return this.__isCoinSafe(temp[a].ChessCoinPosition, temp[a].Color);
            }
        }

        return false;
    }
}

export default ChesscoinService;