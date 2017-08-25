import ChessColor from './ChessColor'
import ChessPosition from './ChessPosition'

import { Component, Input, OnInit } from '@angular/core';

export abstract class ChessCoin implements OnInit {
    
    ngOnInit(): void {
       console.log(this)
    }

    @Input('Color')
    Color: ChessColor;

    private _code: String;
    abstract Name: String;

    constructor(){
        
    }

    // constructor( name: String, _code: String) {
    //     this._code = _code;
    //     this._name = name;
    // }

    // get Color() {
    //     return this._color;
    // }
    // get Code() {
    //     return this._name + '_' + ChessColor[this.Color];
    // }
    abstract GetShiftablePlaces(): ChessPosition[];
}


export default ChessCoin;