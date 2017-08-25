import ChessCoin from './ChessCoins/ChessCoin'
import ChessPosition from './ChessCoins/ChessPosition'
import ChessColor from './ChessCoins/ChessColor'
import Solider from './ChessCoins/Solider'
import Tower from './ChessCoins/Tower'
import Horse from './ChessCoins/Horse'

import { Component, Input, OnInit } from '@angular/core';
import { Bishop } from "./ChessCoins/Bishop";
import { Queen } from "./ChessCoins/Queen";
import { King } from "./ChessCoins/King";

@Component({
    selector: 'chess-coin-placeholder',
    templateUrl: './ChessCoinPlaceHolder.html',
    //inputs:['ChessCellPosition']
    styleUrls: ['./chessboard.component.css']
})
export class ChessCoinPlaceHolder implements OnInit {

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
            else if (this.ChessCellPosition.Column == 4 ) {
                this.CurrentCoin = new Queen();
                this.CurrentCoin.Color = ChessColor.black;
            }
            else if (this.ChessCellPosition.Column == 3 ) {
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
            else if (this.ChessCellPosition.Column == 4 ) {
                this.CurrentCoin = new King();
                this.CurrentCoin.Color = ChessColor.white;
            }
            else if (this.ChessCellPosition.Column == 3 ) {
                this.CurrentCoin = new Queen();
                this.CurrentCoin.Color = ChessColor.white;
            }
        }
    }

    CurrentCoin: ChessCoin;

    @Input('ChessCellPosition')
    ChessCellPosition: ChessPosition;

    OnClick: () => void;
    constructor() {

    }
};

export default ChessCoinPlaceHolder;
