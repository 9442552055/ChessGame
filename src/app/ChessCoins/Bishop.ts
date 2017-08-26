import { ChessPosition } from '../ChessPosition'
import { AbstractChessCoin } from './AbstractChessCoin';

import { Component, Inject } from '@angular/core';
import { ChesscoinService } from "./ChesscoinService"; import { ChessboardService } from "../ChessBoard/ChessboardService";

@Component({
    selector: 'bishop',
    template: '<span *ngIf="Color">&#9815;</span><span *ngIf="!Color">&#9821;</span>'
})
export class Bishop extends AbstractChessCoin {
    Name: String = "bishop";
    constructor(ChesscoinService: ChesscoinService,@Inject('ICoinShiftable') CoinShifter: ChessboardService) {
        // super("bishop", _color == ChessColor.black ? "&#9820;" : "&#9814;");
        super(ChesscoinService,CoinShifter);
    }
    GetShiftablePlaces(): ChessPosition[] {
         //Full left diagonal front upto any coin/end
        //Full right diagonal front upto any coin/end
        //Full left diagonal back upto any coin/end
        //Full right diagonal back upto any coin/end
        //and moving this should not lead check to king
        return [];
    }

};

export default Bishop;