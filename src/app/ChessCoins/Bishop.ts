

import { Component, Inject } from '@angular/core';
import { ChessColor, ChessPosition, AbstractChessCoin, IChesscoinService, ICoinShiftable } from '../Base';

@Component({
    selector: 'bishop',
    template: '<span *ngIf="Color">&#9815;</span><span *ngIf="!Color">&#9821;</span>'
})
export class Bishop extends AbstractChessCoin {
    Name: String = "bishop";
    constructor(@Inject('IChesscoinService') ChesscoinService: IChesscoinService, @Inject('ICoinShiftable') CoinShifter: ICoinShiftable) {
        // super("bishop", _color == ChessColor.black ? "&#9820;" : "&#9814;");
        super(ChesscoinService, CoinShifter);
    }
    GetShiftablePlaces(): ChessPosition[] {
        //Full left diagonal front upto any coin/end
        //Full right diagonal front upto any coin/end
        //Full left diagonal back upto any coin/end
        //Full right diagonal back upto any coin/end
        //and moving this should not lead check to king
        var places = [];
        this.__chesscoinService.AddDiagonalMovements(this.ChessCoinPosition, 1, 1, this.Color, places)
        this.__chesscoinService.AddDiagonalMovements(this.ChessCoinPosition, -1, -1, this.Color, places)
        this.__chesscoinService.AddDiagonalMovements(this.ChessCoinPosition, -1, 1, this.Color, places)
        this.__chesscoinService.AddDiagonalMovements(this.ChessCoinPosition, 1, -1, this.Color, places)
        //and moving this should not lead check to king
        return places;
    }

};

export default Bishop;