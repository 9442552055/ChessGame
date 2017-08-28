

import { Component, Inject } from '@angular/core';
import { ChessColor, ChessPosition, AbstractChessCoin, IChesscoinService, ICoinShiftable } from '../Base';

@Component({
    selector: 'bishop',
    template: '<span *ngIf="Color">&#9815;</span><span *ngIf="!Color">&#9821;</span>'
})
export class Bishop extends AbstractChessCoin {
    Name: String = "bishop";
    constructor(@Inject('IChesscoinService') ChesscoinService: IChesscoinService, @Inject('ICoinShiftable') CoinShifter: ICoinShiftable) {
        super(ChesscoinService, CoinShifter);
    }
    GetShiftablePlaces(): ChessPosition[] {
        //Rules
        //Full left diagonal front upto any coin/end
        //Full right diagonal front upto any coin/end
        //Full left diagonal back upto any coin/end
        //Full right diagonal back upto any coin/end
        //
        var places = [];
        this.__chesscoinService.AddDiagonalMovements(this.ChessCoinPosition, 1, 1, this.Color, places)
        this.__chesscoinService.AddDiagonalMovements(this.ChessCoinPosition, -1, -1, this.Color, places)
        this.__chesscoinService.AddDiagonalMovements(this.ChessCoinPosition, -1, 1, this.Color, places)
        this.__chesscoinService.AddDiagonalMovements(this.ChessCoinPosition, 1, -1, this.Color, places)
        return places;
    }

};

export default Bishop;