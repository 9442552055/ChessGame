import ChessCoin from './ChessCoin'
import ChessColor from './ChessColor'
import ChessPosition from './ChessPosition'

import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'queen',
    template: '<span *ngIf="Color">&#9812;</span><span *ngIf="!Color">&#9818;</span>',
    styleUrls: ['../chessboard.component.css']
})
export class Queen extends ChessCoin {
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