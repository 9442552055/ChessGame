
import { Component, Input, OnInit, Inject/*, ChangeDetectorRef, ChangeDetectionStrategy*/ } from '@angular/core';
import { AbstractChessCoin, ChessColor, ChessPosition, IChessboardCell, ICoinInitializer } from "../Base";


import ChessboardService from "./ChessboardService";

@Component({
    selector: 'chessboard-cell',
    templateUrl: './ChessboardCell.html',
    styleUrls: ['./Chessboard.css'],
    //changeDetection: ChangeDetectionStrategy.Default,
})
export class ChessboardCell implements OnInit, IChessboardCell {

    CurrentCoin: AbstractChessCoin;

    IsSelected: boolean;
    IsCoinShiftable: boolean;
    IsCoinLocked: boolean;

    @Input('ChessCellPosition')
    ChessCellPosition: ChessPosition;
    private __chessGameService: ChessboardService;
    private __coinInitializer: ICoinInitializer;
    //ChangeDetector: ChangeDetectorRef;
    constructor( @Inject('ChessboardService') private ChessboardService: ChessboardService,
        @Inject('ICoinInitializer') private coinInitializer: ICoinInitializer){
        //,changeDetectorRef: ChangeDetectorRef) {
        this.__chessGameService = ChessboardService;
        this.__coinInitializer = coinInitializer;
        //this.ChangeDetector = changeDetectorRef;
    }

    ngOnInit(): void {
        this.__coinInitializer.LoadCoin(this);
        this.__chessGameService.AddPlaceHolder(this);
    }

    OnClick(): void {
        if (!this.IsSelected) {
            this.__chessGameService.SelectCell(this);
        }
        else {
            this.__chessGameService.UnSelectCell(this);
        }
    };

};

export default ChessboardCell;
