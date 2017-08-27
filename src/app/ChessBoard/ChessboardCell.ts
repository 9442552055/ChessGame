
import ChessPosition from '../ChessPosition';
import ChessColor from '../ChessColor';

import { Solider, Tower, Horse, Bishop, Queen, King, AbstractChessCoin } from '../ChessCoins'

import ChessboardService from "./ChessboardService";

import { Component, Input, OnInit, Inject } from '@angular/core';


@Component({
    selector: 'chess-coin-placeholder',
    templateUrl: './ChessboardCell.html',
    //inputs:['ChessCellPosition']
    styleUrls: ['./Chessboard.css']
})
export class ChessboardCell implements OnInit {

    CurrentCoin: AbstractChessCoin;

    IsSelected: boolean;
    IsCoinShiftable: boolean;

    @Input('ChessCellPosition')
    ChessCellPosition: ChessPosition;
    private __chessGameService: ChessboardService;
    constructor(@Inject('ChessboardService') ChessboardService: ChessboardService) {
        this.__chessGameService = ChessboardService;

    }

    ngOnInit(): void {

        if (this.ChessCellPosition.Row == 0) {
            if (this.ChessCellPosition.Column == 0 || this.ChessCellPosition.Column == 7) {
                this.CurrentCoin = new Tower(null, null);
                this.CurrentCoin.Color = ChessColor.black;
                this.CurrentCoin.ChessCoinPosition=new ChessPosition(this.ChessCellPosition.Row,this.ChessCellPosition.Column)
                
            }
            else if (this.ChessCellPosition.Column == 1 || this.ChessCellPosition.Column == 6) {
                this.CurrentCoin = new Horse(null, null);
                this.CurrentCoin.Color = ChessColor.black;
                this.CurrentCoin.ChessCoinPosition=new ChessPosition(this.ChessCellPosition.Row,this.ChessCellPosition.Column)
            }
            else if (this.ChessCellPosition.Column == 2 || this.ChessCellPosition.Column == 5) {
                this.CurrentCoin = new Bishop(null, null);
                this.CurrentCoin.Color = ChessColor.black;
                this.CurrentCoin.ChessCoinPosition=new ChessPosition(this.ChessCellPosition.Row,this.ChessCellPosition.Column)
            }
            else if (this.ChessCellPosition.Column == 4) {
                this.CurrentCoin = new Queen(null, null);
                this.CurrentCoin.Color = ChessColor.black;
                this.CurrentCoin.ChessCoinPosition=new ChessPosition(this.ChessCellPosition.Row,this.ChessCellPosition.Column)
            }
            else if (this.ChessCellPosition.Column == 3) {
                this.CurrentCoin = new King(null, null);
                this.CurrentCoin.Color = ChessColor.black;
                this.CurrentCoin.ChessCoinPosition=new ChessPosition(this.ChessCellPosition.Row,this.ChessCellPosition.Column)
            }
        }
        else if (this.ChessCellPosition.Row == 1) {
            this.CurrentCoin = new Solider(null, null);
            this.CurrentCoin.Color = ChessColor.black;
             this.CurrentCoin.ChessCoinPosition=new ChessPosition(this.ChessCellPosition.Row,this.ChessCellPosition.Column)
        }
        else if (this.ChessCellPosition.Row == 6) {
            this.CurrentCoin = new Solider(null, null);
            this.CurrentCoin.Color = ChessColor.white;
             this.CurrentCoin.ChessCoinPosition=new ChessPosition(this.ChessCellPosition.Row,this.ChessCellPosition.Column)
        }
        else if (this.ChessCellPosition.Row == 7) {
            if (this.ChessCellPosition.Column == 0 || this.ChessCellPosition.Column == 7) {
                this.CurrentCoin = new Tower(null, null);
                this.CurrentCoin.Color = ChessColor.white;
                this.CurrentCoin.ChessCoinPosition=new ChessPosition(this.ChessCellPosition.Row,this.ChessCellPosition.Column)
            }
            else if (this.ChessCellPosition.Column == 1 || this.ChessCellPosition.Column == 6) {
                this.CurrentCoin = new Horse(null, null);
                this.CurrentCoin.Color = ChessColor.white;
                this.CurrentCoin.ChessCoinPosition=new ChessPosition(this.ChessCellPosition.Row,this.ChessCellPosition.Column)
            }
            else if (this.ChessCellPosition.Column == 2 || this.ChessCellPosition.Column == 5) {
                this.CurrentCoin = new Bishop(null, null);
                this.CurrentCoin.Color = ChessColor.white;
                this.CurrentCoin.ChessCoinPosition=new ChessPosition(this.ChessCellPosition.Row,this.ChessCellPosition.Column)
            }
            else if (this.ChessCellPosition.Column == 4) {
                this.CurrentCoin = new Queen(null, null);
                this.CurrentCoin.Color = ChessColor.white;
                this.CurrentCoin.ChessCoinPosition=new ChessPosition(this.ChessCellPosition.Row,this.ChessCellPosition.Column)
            }
            else if (this.ChessCellPosition.Column == 3) {
                this.CurrentCoin = new King(null, null);
                this.CurrentCoin.Color = ChessColor.white;
                this.CurrentCoin.ChessCoinPosition=new ChessPosition(this.ChessCellPosition.Row,this.ChessCellPosition.Column)
            }
        }
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
