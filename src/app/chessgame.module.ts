import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ChessboardComponent } from './chessboard.component';
import { ChessCoinPlaceHolder } from './ChessCoinPlaceHolder';
import { Solider } from './ChessCoins/Solider';
import { Tower } from './ChessCoins/Tower';
import { Horse } from './ChessCoins/Horse';
import { Bishop } from './ChessCoins/Bishop';
import { Queen } from './ChessCoins/Queen';
import { King } from './ChessCoins/King';

@NgModule({
  declarations: [
    ChessboardComponent, ChessCoinPlaceHolder, Solider, Tower, Horse, Bishop, Queen, King
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ChessboardComponent]
})
export class ChessGame { }
