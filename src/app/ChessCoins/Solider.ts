import { ChessPosition } from '../ChessPosition'
import { AbstractChessCoin } from './AbstractChessCoin';
import { Component } from '@angular/core';

@Component({
    selector: 'solider',
    template: '<span *ngIf="Color">&#9817;</span><span *ngIf="!Color">&#9823;</span>'
})
export class Solider extends AbstractChessCoin {
    Name: String = "solider";
    constructor() {
       // super( "solider", _color == ChessColor.black ? "&#9823;" : "&#9817;");
       super();
    }
    public GetShiftablePlaces() {
        return [];
    }
}

export default Solider;