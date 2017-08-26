import { ChessPosition } from '../ChessPosition'
import { ChessColor } from '../ChessColor'


import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ChesscoinService } from "./ChesscoinService"; import { ChessboardService } from "../ChessBoard/ChessboardService";
import { ICoinShiftable } from "../ICoinShiftable";


export abstract class AbstractChessCoin implements OnInit, OnDestroy {

    @Input('Color')
    Color: ChessColor;

    @Input('ChessCellPosition')
    ChessCellPosition: ChessPosition;

    protected __chesscoinService: ChesscoinService;
    protected __coinShifter: ICoinShiftable;

    abstract Name: String;
    __id: number;
    constructor(ChesscoinService: ChesscoinService, coinShifter: ICoinShiftable) {
        this.__chesscoinService = ChesscoinService;
        this.__id = new Date().getTime();
        this.__coinShifter = coinShifter;
    }
    ngOnInit(): void {
        console.log(this);
        this.__chesscoinService.AddChessCoin(this);
        this.__coinShifter.UpdateCoinMove(this);
    }

    ngOnDestroy(): void {
        this.__chesscoinService.RemoveChessCoin(this);
    }

    abstract GetShiftablePlaces(): ChessPosition[];
}


export default AbstractChessCoin;