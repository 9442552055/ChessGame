import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ChessboardComponent, ChessboardCell, ChessboardServiceFactory, ChessboardService } from './ChessBoard';

import { Solider, Tower, Horse, Bishop, Queen, King, ChesscoinService } from './ChessCoins';

import { ICoinShiftable } from './ICoinShiftable'


@NgModule({
  declarations: [
    ChessboardComponent, ChessboardCell, Solider, Tower, Horse, Bishop, Queen, King
  ],
  imports: [
    BrowserModule
  ],
  providers: [{ provide: 'ChessboardService', useFactory: ChessboardServiceFactory }, ChesscoinService, { provide: 'ICoinShiftable', useFactory: ChessboardServiceFactory }],
  bootstrap: [ChessboardComponent]
})
export class ChessGame { }
