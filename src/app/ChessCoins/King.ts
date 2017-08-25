import { ChessPosition } from '../ChessPosition'
import { AbstractChessCoin } from './AbstractChessCoin';

import { Component } from '@angular/core';

@Component({
    selector: 'king',
    template: '<span *ngIf="Color">&#9813;</span><span *ngIf="!Color">&#9819;</span>'
})
export class King extends AbstractChessCoin {
    Name: String = "king";
    constructor() {
        //super( "king", _color == ChessColor.black ? ">&#9819;" : "&#9814;");
        super();
    }
    GetShiftablePlaces(): ChessPosition[] {
        throw new Error("Method not implemented.");
    }
}

export default King;
