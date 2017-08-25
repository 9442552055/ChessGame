import ChessCoin from './ChessCoin'
import ChessColor from './ChessColor'
import ChessPosition from './ChessPosition'

import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'horse',
    template: '<span *ngIf="Color">&#9816;</span><span *ngIf="!Color">&#9822;</span>',
    styleUrls: ['../chessboard.component.css']
})
export class Horse extends ChessCoin {
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