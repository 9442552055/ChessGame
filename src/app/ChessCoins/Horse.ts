import { ChessPosition } from '../ChessPosition'
import { AbstractChessCoin } from './AbstractChessCoin';

import { Component, Inject } from '@angular/core';
import { ChesscoinService } from "./ChesscoinService"; import { ChessboardService } from "../ChessBoard/ChessboardService";

@Component({
    selector: 'horse',
    template: '<span *ngIf="Color">&#9816;</span><span *ngIf="!Color">&#9822;</span>'
})
export class Horse extends AbstractChessCoin {
    Name: String = "horse";
    constructor(ChesscoinService: ChesscoinService,@Inject('ICoinShiftable') CoinShifter: ChessboardService) {
        //super( "horse", _color == ChessColor.black ? "&#9822;" : "&#9816;");
        super(ChesscoinService,CoinShifter);
    }
    GetShiftablePlaces(): ChessPosition[] {
        throw new Error("Method not implemented.");
    }

};

export default Horse;