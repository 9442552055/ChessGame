import { ChessPosition } from '../ChessPosition'
import { AbstractChessCoin } from './AbstractChessCoin';

import { Component } from '@angular/core';

@Component({
    selector: 'horse',
    template: '<span *ngIf="Color">&#9816;</span><span *ngIf="!Color">&#9822;</span>'
})
export class Horse extends AbstractChessCoin {
    Name: String = "horse";
    constructor() {
        //super( "horse", _color == ChessColor.black ? "&#9822;" : "&#9816;");
        super();
    }
    GetShiftablePlaces(): ChessPosition[] {
        throw new Error("Method not implemented.");
    }

};

export default Horse;