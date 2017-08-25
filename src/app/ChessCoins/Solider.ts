import ChessCoin from './ChessCoin'
import ChessColor from './ChessColor'
import ChessPosition from './ChessPosition'

import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'solider',
    template: '<span *ngIf="Color">&#9817;</span><span *ngIf="!Color">&#9823;</span>',
    styleUrls: ['../chessboard.component.css']
})
export class Solider extends ChessCoin {
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