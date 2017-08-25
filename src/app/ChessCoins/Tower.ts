import { ChessPosition } from '../ChessPosition'
import { AbstractChessCoin } from './AbstractChessCoin';

import { Component } from '@angular/core';

@Component({
    selector: 'tower',
    template: '<span *ngIf="Color">&#9814;</span><span *ngIf="!Color">&#9820;</span>'
})
export class Tower extends AbstractChessCoin {
    Name: String = "tower";
    constructor() {
        //super( "tower", _color == ChessColor.black ? "&#9820;" : "&#9814;");
        super();
    }
    GetShiftablePlaces(): ChessPosition[] {
        throw new Error("Method not implemented.");
    }
}
export default Tower;