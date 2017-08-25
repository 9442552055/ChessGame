import { ChessPosition } from '../ChessPosition'
import { AbstractChessCoin } from './AbstractChessCoin';

import { Component } from '@angular/core';

@Component({
    selector: 'bishop',
    template: '<span *ngIf="Color">&#9815;</span><span *ngIf="!Color">&#9821;</span>'
})
export class Bishop extends AbstractChessCoin {
    Name: String = "bishop";
    constructor() {
        // super("bishop", _color == ChessColor.black ? "&#9820;" : "&#9814;");
        super();
    }
    GetShiftablePlaces(): ChessPosition[] {
        throw new Error("Method not implemented.");
    }

};

export default Bishop;