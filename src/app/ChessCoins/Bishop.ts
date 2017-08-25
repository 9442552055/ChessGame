import ChessCoin from './ChessCoin'
import ChessColor from './ChessColor'
import ChessPosition from './ChessPosition'

import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'bishop',
    template: '<span *ngIf="Color">&#9815;</span><span *ngIf="!Color">&#9821;</span>',
    styleUrls: ['../chessboard.component.css']
})
export class Bishop extends ChessCoin {
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