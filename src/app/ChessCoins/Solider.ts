import { ChessPosition } from '../ChessPosition'
import { AbstractChessCoin } from './AbstractChessCoin';
import { Component, Inject } from '@angular/core';
import { ChesscoinService } from "./ChesscoinService"; import { ChessboardService } from "../ChessBoard/ChessboardService";
import { ChessColor } from "../ChessColor";
import { ICoinShiftable } from "../ICoinShiftable";

@Component({
    selector: 'solider',
    template: '<span *ngIf="Color">&#9817;</span><span *ngIf="!Color">&#9823;</span>'
})
export class Solider extends AbstractChessCoin {
    Name: String = "solider";
    constructor(ChesscoinService: ChesscoinService, @Inject('ICoinShiftable') CoinShifter: ICoinShiftable) {
        // super( "solider", _color == ChessColor.black ? "&#9823;" : "&#9817;");
        super(ChesscoinService, CoinShifter);
    }
    public GetShiftablePlaces() {
        var places = [];
        //### 1. Straight Line path
        var addIfNoCoin = function (chesscoinService) {
            return function (p: ChessPosition) {
                var coin = chesscoinService.GetCoinIfExists(p);
                if (!coin) {
                    places.push(p);
                }
                return coin;
            }
        }(this.__chesscoinService);
        var GetPositionByColorOperation = (p: AbstractChessCoin, val: number): ChessPosition => {
            return p.Color == ChessColor.black ? new ChessPosition(p.ChessCellPosition.Row + val, p.ChessCellPosition.Column) : new ChessPosition(p.ChessCellPosition.Row - val, p.ChessCellPosition.Column);
        }
        var CoinInPath: AbstractChessCoin = null;
        if (this.Color == ChessColor.black) {
            if (this.ChessCellPosition.Row < 7) {
                var p1 = GetPositionByColorOperation(this, 1);
                CoinInPath = addIfNoCoin(p1)
            }
            if (this.ChessCellPosition.Row == 1 && !CoinInPath) {
                var p2 = GetPositionByColorOperation(this, 2);
                CoinInPath = addIfNoCoin(p2);
            }
        }
        else {
            if (this.ChessCellPosition.Row > 0) {
                var p3 = GetPositionByColorOperation(this, 1);
                CoinInPath = addIfNoCoin(p3)
            }
            if (this.ChessCellPosition.Row == 6 && !CoinInPath) {
                var p4 = GetPositionByColorOperation(this, 2);
                CoinInPath = addIfNoCoin(p4)
            }
        }
        //###### 2. One step cross line if opponent coin exits
        //Check not exceed board limit up/down
        if ((this.Color == ChessColor.black && this.ChessCellPosition.Row < 7)
            || (this.Color == ChessColor.white && this.ChessCellPosition.Row > 0)) {
            var p5 = GetPositionByColorOperation(this, 1);
            //right
            //Check not exceed board limit right
            if (p5.Column < 7) {
                p5.Column++;
                var sidecoinA = this.__chesscoinService.GetCoinIfExists(p5);
                if (sidecoinA && sidecoinA.Color != this.Color) {
                    places.push(p5);
                }
            }
            var p6 = { ...p5 };
            p6.Column--;
            //Check not exceed board limit left
            if (p6.Column > 0) {
                //left
                p6.Column--;
                var sidecoinB = this.__chesscoinService.GetCoinIfExists(p6);
                if (sidecoinB && sidecoinB.Color != this.Color) {
                    places.push(p6);
                }
            }
        }
        return places;
    }
}

export default Solider;