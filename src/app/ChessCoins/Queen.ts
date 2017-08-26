import { ChessPosition } from '../ChessPosition'
import { AbstractChessCoin } from './AbstractChessCoin';

import { Component, Inject } from '@angular/core';
import { ChesscoinService } from "./ChesscoinService"; import { ChessboardService } from "../ChessBoard/ChessboardService";

@Component({
    selector: 'queen',
    template: '<span *ngIf="Color">&#9812;</span><span *ngIf="!Color">&#9818;</span>'
})
export class Queen extends AbstractChessCoin {
    Name: String = "queen";
    constructor(ChesscoinService: ChesscoinService, @Inject('ICoinShiftable') CoinShifter: ChessboardService) {
        //super( "queen", _color == ChessColor.black ? "&#9818;" : "&#9814;");
        super(ChesscoinService, CoinShifter);
    }
    GetShiftablePlaces(): ChessPosition[] {
        //Full column front and back upto any coin/end
        //Full row left and right upto any coin/end
        //Full left diagonal front upto any coin/end
        //Full right diagonal front upto any coin/end
        //Full left diagonal back upto any coin/end
        //Full right diagonal back upto any coin/end
        //and moving this should not lead check to king
        return [];
    }
}

export default Queen;