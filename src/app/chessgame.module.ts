import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ChessboardComponent, ChessboardCell, ChessboardService } from './ChessBoard';

import { Solider, Tower, Horse, Bishop, Queen, King } from './ChessCoins'

@NgModule({
  declarations: [
    ChessboardComponent, ChessboardCell, Solider, Tower, Horse, Bishop, Queen, King
  ],
  imports: [
    BrowserModule
  ],
  providers: [ChessboardService],
  bootstrap: [ChessboardComponent]
})
export class ChessGame { }
