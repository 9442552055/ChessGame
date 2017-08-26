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
        
        this.__chesscoinService.AddLinearMovements(this.ChessCellPosition, "Row", 1,this.Color,places)
        this.__chesscoinService.AddLinearMovements(this.ChessCellPosition, "Row", -1,this.Color,places)
        this.__chesscoinService.AddLinearMovements(this.ChessCellPosition, "Column", 1,this.Color,places)
        this.__chesscoinService.AddLinearMovements(this.ChessCellPosition, "Column", -1,this.Color,places)
        return places;
    }
}
export default Tower;