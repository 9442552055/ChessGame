
import { Component, Inject } from '@angular/core';
import { ChessColor, ChessPosition, AbstractChessCoin, IChesscoinService, ICoinShiftable } from '../Base';

@Component({
    selector: 'horse',
    template: '<span *ngIf="Color">&#9816;</span><span *ngIf="!Color">&#9822;</span>'
})
export class Horse extends AbstractChessCoin {
    Name: String = "horse";
    constructor(@Inject('IChesscoinService') ChesscoinService: IChesscoinService, @Inject('ICoinShiftable') CoinShifter: ICoinShiftable) {
        //super( "horse", _color == ChessColor.black ? "&#9822;" : "&#9816;");
        super(ChesscoinService, CoinShifter);
    }
    GetShiftablePlaces(): ChessPosition[] {
        // throw new Error("Method not implemented.");
        //add add 2,1 & 1,2 within boardlimits
        //sub sub 2,1 & 1,2 within boardlimits
        //add sub 2,1 & 1,2 within boardlimits
        //sub add 2,1 & 1,2 within boardlimits
        // moving this should cause check to king;
        var places = []
        this.__chesscoinService.AddJumpMovements(this.ChessCoinPosition, 1, 2, this.Color, places)
        this.__chesscoinService.AddJumpMovements(this.ChessCoinPosition, -1, -2, this.Color, places)
        this.__chesscoinService.AddJumpMovements(this.ChessCoinPosition, -1, 2, this.Color, places)
        this.__chesscoinService.AddJumpMovements(this.ChessCoinPosition, 1, -2, this.Color, places)

        this.__chesscoinService.AddJumpMovements(this.ChessCoinPosition, 2, 1, this.Color, places)
        this.__chesscoinService.AddJumpMovements(this.ChessCoinPosition, -2, -1, this.Color, places)
        this.__chesscoinService.AddJumpMovements(this.ChessCoinPosition, -2, 1, this.Color, places)
        this.__chesscoinService.AddJumpMovements(this.ChessCoinPosition, 2, -1, this.Color, places)
        //and moving this should not lead check to king
        return places;
    }

};

export default Horse;