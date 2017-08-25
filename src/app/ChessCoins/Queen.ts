import { ChessPosition } from '../ChessPosition'
import { AbstractChessCoin } from './AbstractChessCoin';

import { Component } from '@angular/core';

@Component({
    selector: 'queen',
    template: '<span *ngIf="Color">&#9812;</span><span *ngIf="!Color">&#9818;</span>'
})
export class Queen extends AbstractChessCoin {
    Name: String = "queen";
    constructor() {
        //super( "queen", _color == ChessColor.black ? "&#9818;" : "&#9814;");
        super();
    }
    GetShiftablePlaces(): ChessPosition[] {
        throw new Error("Method not implemented.");
    }
}

export default Queen;