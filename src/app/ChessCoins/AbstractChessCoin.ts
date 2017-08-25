import { ChessPosition } from '../ChessPosition'
import { ChessColor } from '../ChessColor'


import { Component, Input, OnInit } from '@angular/core';

export abstract class AbstractChessCoin implements OnInit {   
    @Input('Color')
    Color: ChessColor;

    abstract Name: String;
    constructor(){ }    
    ngOnInit(): void {
       console.log(this)
    }

    abstract GetShiftablePlaces(): ChessPosition[];
}


export default AbstractChessCoin;