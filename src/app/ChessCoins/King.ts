import ChessCoin from './ChessCoin'
import ChessColor from './ChessColor'
import ChessPosition from './ChessPosition'

import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'king',
    template: '<span *ngIf="Color">&#9813;</span><span *ngIf="!Color">&#9819;</span>',
    styleUrls: ['../chessboard.component.css']
})
export class King extends ChessCoin {
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
