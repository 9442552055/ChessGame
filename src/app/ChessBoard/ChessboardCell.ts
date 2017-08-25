
import ChessPosition from '../ChessPosition';
import ChessColor from '../ChessColor';

import { Solider, Tower, Horse, Bishop, Queen, King, AbstractChessCoin } from '../ChessCoins'

import ChessboardService from "./ChessboardService";

import { Component, Input, OnInit } from '@angular/core';


@Component({
    selector: 'chess-coin-placeholder',
    templateUrl: './ChessboardCell.html',
    //inputs:['ChessCellPosition']
    styleUrls: ['./Chessboard.css']
})
export class ChessboardCell implements OnInit {

    CurrentCoin: AbstractChessCoin;

    IsSelected: boolean;

    @Input('ChessCellPosition')
    ChessCellPosition: ChessPosition;
    private _chessGameService: ChessboardService;
    constructor(ChessboardService: ChessboardService) {
        this._chessGameService = ChessboardService;
        this._chessGameService.AddPlaceHolder(this);
    }

    ngOnInit(): void {

        if (this.ChessCellPosition.Row == 0) {
            if (this.ChessCellPosition.Column == 0 || this.ChessCellPosition.Column == 7) {
                this.CurrentCoin = new Tower();
                this.CurrentCoin.Color = ChessColor.black;
            }
            else if (this.ChessCellPosition.Column == 1 || this.ChessCellPosition.Column == 6) {
                this.CurrentCoin = new Horse();
                this.CurrentCoin.Color = ChessColor.black;
            }
            else if (this.ChessCellPosition.Column == 2 || this.ChessCellPosition.Column == 5) {
                this.CurrentCoin = new Bishop();
                this.CurrentCoin.Color = ChessColor.black;
            }
            else if (this.ChessCellPosition.Column == 4) {
                this.CurrentCoin = new Queen();
                this.CurrentCoin.Color = ChessColor.black;
            }
            else if (this.ChessCellPosition.Column == 3) {
                this.CurrentCoin = new King();
                this.CurrentCoin.Color = ChessColor.black;
            }
        }
        else if (this.ChessCellPosition.Row == 1) {
            this.CurrentCoin = new Solider();
            this.CurrentCoin.Color = ChessColor.black;
        }
        else if (this.ChessCellPosition.Row == 6) {
            this.CurrentCoin = new Solider();
            this.CurrentCoin.Color = ChessColor.white;
        }
        else if (this.ChessCellPosition.Row == 7) {
            if (this.ChessCellPosition.Column == 0 || this.ChessCellPosition.Column == 7) {
                this.CurrentCoin = new Tower();
                this.CurrentCoin.Color = ChessColor.white;
            }
            else if (this.ChessCellPosition.Column == 1 || this.ChessCellPosition.Column == 6) {
                this.CurrentCoin = new Horse();
                this.CurrentCoin.Color = ChessColor.white;
            }
            else if (this.ChessCellPosition.Column == 2 || this.ChessCellPosition.Column == 5) {
                this.CurrentCoin = new Bishop();
                this.CurrentCoin.Color = ChessColor.white;
            }
            else if (this.ChessCellPosition.Column == 4) {
                this.CurrentCoin = new King();
                this.CurrentCoin.Color = ChessColor.white;
            }
            else if (this.ChessCellPosition.Column == 3) {
                this.CurrentCoin = new Queen();
                this.CurrentCoin.Color = ChessColor.white;
            }
        }
    }

    OnClick(): void {
        this._chessGameService.SelectCell(this);
    };

};

export default ChessboardCell;
