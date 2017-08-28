
import { Component, Inject } from '@angular/core';
import { ChessColor, ChessPosition, AbstractChessCoin, IChesscoinService, ICoinShiftable } from '../Base';

@Component({
    selector: 'king',
    template: '<span *ngIf="Color">&#9813;</span><span *ngIf="!Color">&#9819;</span>'
})
export class King extends AbstractChessCoin {
    Name: String = "king";
    constructor(@Inject('IChesscoinService') ChesscoinService: IChesscoinService,@Inject('ICoinShiftable') CoinShifter: ICoinShiftable) {
        //super( "king", _color == ChessColor.black ? ">&#9819;" : "&#9814;");
        super(ChesscoinService,CoinShifter);
    }
    GetShiftablePlaces(): ChessPosition[] {
        //one step in all eight directions with board limits
        //add   row col  - sub row col
        //0     0   0    -  1   0   0
        //0     0   1    -  1   0   1
        //0     1   0    -  1   1   0
        //0     1   1    -  1   1   1
        return this.__chesscoinService.GetKingsMovements(this.ChessCoinPosition,this.Color);
        //it should make check the same[this king]
    }
}

export default King;
