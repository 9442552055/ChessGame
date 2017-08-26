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
       // throw new Error("Method not implemented.");
       //add add 3,1 & 1,3 within boardlimits
       //sub sub 3,1 & 1,3 within boardlimits
       //add sub 3,1 & 1,3 within boardlimits
       //sub add 3,1 & 1,3 within boardlimits
       // moving this should cause check to king;
       return [];
    }

};

export default Horse;