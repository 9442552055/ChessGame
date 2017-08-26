import { ChessPosition } from '../ChessPosition'
import { AbstractChessCoin } from './AbstractChessCoin';

import { Component, Inject } from '@angular/core';
import { ChesscoinService } from "./ChesscoinService"; import { ChessboardService } from "../ChessBoard/ChessboardService";

@Component({
    selector: 'king',
    template: '<span *ngIf="Color">&#9813;</span><span *ngIf="!Color">&#9819;</span>'
})
export class King extends AbstractChessCoin {
    Name: String = "king";
    constructor(ChesscoinService: ChesscoinService,@Inject('ICoinShiftable') CoinShifter: ChessboardService) {
        //super( "king", _color == ChessColor.black ? ">&#9819;" : "&#9814;");
        super(ChesscoinService,CoinShifter);
    }
    GetShiftablePlaces(): ChessPosition[] {
        throw new Error("Method not implemented.");
    }
}

export default King;