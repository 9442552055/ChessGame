
import { Component, Input, OnInit, Inject } from '@angular/core';
import { AbstractChessCoin, ChessColor, ChessPosition, IChessboardCell, ICoinInitializer } from "../Base";


import ChessboardService from "./ChessboardService";

@Component({
    selector: 'chess-coin-placeholder',
    templateUrl: './ChessboardCell.html',
    //inputs:['ChessCellPosition']
    styleUrls: ['./Chessboard.css']
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
    constructor( @Inject('ChessboardService') ChessboardService: ChessboardService, @Inject('ICoinInitializer') coinInitializer: ICoinInitializer) {
        this.__chessGameService = ChessboardService;
        this.__coinInitializer = coinInitializer;
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
