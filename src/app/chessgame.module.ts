import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ChessboardComponent, ChessboardCell, ChessboardServiceFactory, ChessboardService } from './ChessBoard';

import { Solider, Tower, Horse, Bishop, Queen, King, ChesscoinService, CoinInitializer } from './ChessCoins';

import { ICoinShiftable } from './Base'


@NgModule({
  declarations: [
    ChessboardComponent, ChessboardCell, Solider, Tower, Horse, Bishop, Queen, King
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    { provide: 'IChesscoinService', useClass: ChesscoinService },
    { provide: 'ChessboardService', useFactory: ChessboardServiceFactory },
    { provide: 'ICoinShiftable', useFactory: ChessboardServiceFactory },
    { provide: 'ICoinInitializer', useClass: CoinInitializer }
  ],
  bootstrap: [ChessboardComponent]
})
export class ChessGame { }
