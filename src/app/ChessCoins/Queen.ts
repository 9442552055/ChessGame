
import { Component, Inject } from '@angular/core';
import { ChessColor, ChessPosition, AbstractChessCoin, IChesscoinService, ICoinShiftable } from '../Base';

@Component({
    selector: 'queen',
    template: '<span [ngStyle]="UIPosition"><span *ngIf="Color">&#9813;</span><span *ngIf="!Color">&#9819;</span></span>'
})
export class Queen extends AbstractChessCoin {
    Name: String = "queen";
    constructor(@Inject('IChesscoinService') ChesscoinService: IChesscoinService, @Inject('ICoinShiftable') CoinShifter: ICoinShiftable) {
        //super( "queen", _color == ChessColor.black ? "&#9818;" : "&#9814;");
        super(ChesscoinService, CoinShifter);
    }
    GetShiftablePlaces(): ChessPosition[] {
        //Full column front and back upto any coin/end
        //Full row left and right upto any coin/end
         var places = [];
        
        this.__chesscoinService.AddLinearMovements(this.ChessCoinPosition, "Row", 1,this.Color,places)
        this.__chesscoinService.AddLinearMovements(this.ChessCoinPosition, "Row", -1,this.Color,places)
        this.__chesscoinService.AddLinearMovements(this.ChessCoinPosition, "Column", 1,this.Color,places)
        this.__chesscoinService.AddLinearMovements(this.ChessCoinPosition, "Column", -1,this.Color,places)
        //Full left diagonal front upto any coin/end
        //Full right diagonal front upto any coin/end
        //Full left diagonal back upto any coin/end
        //Full right diagonal back upto any coin/end
        
        this.__chesscoinService.AddDiagonalMovements(this.ChessCoinPosition, 1, 1,this.Color,places)
        this.__chesscoinService.AddDiagonalMovements(this.ChessCoinPosition, -1, -1,this.Color,places)
        this.__chesscoinService.AddDiagonalMovements(this.ChessCoinPosition, -1, 1,this.Color,places)
        this.__chesscoinService.AddDiagonalMovements(this.ChessCoinPosition, 1, -1,this.Color,places)
        //and moving this should not lead check to king
        return places;
    }
}

export default Queen;