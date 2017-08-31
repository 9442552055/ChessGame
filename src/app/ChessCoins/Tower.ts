
import { Component, Inject } from '@angular/core';
import { ChessColor, ChessPosition, AbstractChessCoin, IChesscoinService, ICoinShiftable } from '../Base';

@Component({
    selector: 'tower',
    template: '<span (click)="OnClick($event)" [ngStyle]="UIPosition"><span *ngIf="Color">&#9814;</span><span *ngIf="!Color">&#9820;</span></span>'
})
export class Tower extends AbstractChessCoin {
    Name: String = "tower";
    constructor(@Inject('IChesscoinService') ChesscoinService: IChesscoinService, @Inject('ICoinShiftable') CoinShifter: ICoinShiftable) {
        //super( "tower", _color == ChessColor.black ? "&#9820;" : "&#9814;");
        super(ChesscoinService, CoinShifter);
    }
    GetShiftablePlaces(): ChessPosition[] {
        //Full column front and back upto any coin/end
        //Full row left and right upto any coin/end
        //and moving this should not lead check to king
        var places = [];
        
        this.__chesscoinService.AddLinearMovements(this.ChessCoinPosition, "Row", 1,this.Color,places)
        this.__chesscoinService.AddLinearMovements(this.ChessCoinPosition, "Row", -1,this.Color,places)
        this.__chesscoinService.AddLinearMovements(this.ChessCoinPosition, "Column", 1,this.Color,places)
        this.__chesscoinService.AddLinearMovements(this.ChessCoinPosition, "Column", -1,this.Color,places)
        return places;
    }
}
export default Tower;