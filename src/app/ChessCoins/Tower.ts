import ChessCoin from './ChessCoin'
import ChessColor from './ChessColor'
import ChessPosition from './ChessPosition'

import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'tower',
    template: '<span *ngIf="Color">&#9814;</span><span *ngIf="!Color">&#9820;</span>',
    styleUrls: ['../chessboard.component.css']
})
export class Tower extends ChessCoin {
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