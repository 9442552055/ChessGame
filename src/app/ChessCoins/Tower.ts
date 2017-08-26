import { ChessPosition } from '../ChessPosition'
import { AbstractChessCoin } from './AbstractChessCoin';

import { Component, Inject } from '@angular/core';
import { ChesscoinService } from "./ChesscoinService"; import { ChessboardService } from "../ChessBoard/ChessboardService";

@Component({
    selector: 'tower',
    template: '<span *ngIf="Color">&#9814;</span><span *ngIf="!Color">&#9820;</span>'
})
export class Tower extends AbstractChessCoin {
    Name: String = "tower";
    constructor(ChesscoinService: ChesscoinService, @Inject('ICoinShiftable') CoinShifter: ChessboardService) {
        //super( "tower", _color == ChessColor.black ? "&#9820;" : "&#9814;");
        super(ChesscoinService, CoinShifter);
    }
    GetShiftablePlaces(): ChessPosition[] {
        //Full column front and back upto any coin/end
        //Full row left and right upto any coin/end
        //and moving this should not lead check to king
        var places = [];
        var addPositions = function (ChesscoinService, MyColor) {
            return function (p: ChessPosition, type: string, val: number) {
                if ((p[type] < 7 && val == 1) || (val == -1 && p[type] > 0)) {
                    var newP = { ...p };
                    newP[type] = newP[type] + val;
                    var coinInPath = ChesscoinService.GetCoinIfExists(newP);
                    if (!coinInPath) {
                        places.push(newP);
                        addPositions(newP, type, val);
                    }
                    else if (coinInPath.Color != MyColor) {
                        places.push(newP);
                    }
                }
            }
        }(this.__chesscoinService, this.Color);
        addPositions(this.ChessCellPosition, "Row", 1)
        addPositions(this.ChessCellPosition, "Row", -1)
        addPositions(this.ChessCellPosition, "Column", 1)
        addPositions(this.ChessCellPosition, "Column", -1)
        return places;
    }
}
export default Tower;