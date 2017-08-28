
import { Component, Input, OnInit, OnDestroy } from '@angular/core';

import { ChessPosition } from './ChessPosition'
import { ChessColor } from './ChessColor'
import { IChesscoinService } from "./IChesscoinService";
import { ICoinShiftable } from "./ICoinShiftable";


export abstract class AbstractChessCoin implements OnInit, OnDestroy {

    @Input('Color')
    Color: ChessColor;

    @Input('ChessCoinPosition')
    ChessCoinPosition: ChessPosition;

    protected __chesscoinService: IChesscoinService;
    protected __coinShifter: ICoinShiftable;
    private __oldPosition: ChessPosition;

    abstract Name: String;
    __id: number;
    constructor(ChesscoinService: IChesscoinService, coinShifter: ICoinShiftable) {
        this.__chesscoinService = ChesscoinService;
        this.__id = new Date().getTime();
        this.__coinShifter = coinShifter;
    }
    ngOnInit(): void {
        //console.log(this);
        this.__chesscoinService.AddChessCoin(this);
        this.__coinShifter.UpdateCoinMove(this);
    }

    ngOnDestroy(): void {
        this.__chesscoinService.RemoveChessCoin(this, this.__oldPosition);
    }

    abstract GetShiftablePlaces(): ChessPosition[];

    MoveTo(chessCoinPosition: ChessPosition): boolean {
        this.__oldPosition = { ...this.ChessCoinPosition };
        this.ChessCoinPosition.Row = chessCoinPosition.Row;
        this.ChessCoinPosition.Column = chessCoinPosition.Column;
        //TODO: Check if king has problem in this move, if so revert and return false
        if (!this.__chesscoinService.IsKingSafe(this.Color)) {
            this.ChessCoinPosition.Row = this.__oldPosition.Row;
            this.ChessCoinPosition.Column = this.__oldPosition.Column;
            return false;
        }
        setTimeout(() => {
            if (!this.__chesscoinService.IsOtherKingSafe(this.Color)) {
                alert("Check !!!");
            }
        }, 50);

        return true;
    }
}


export default AbstractChessCoin;