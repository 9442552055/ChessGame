import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ChessboardComponent } from './chessboard.component';

@NgModule({
  declarations: [
    ChessboardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ChessboardComponent]
})
export class ChessGame { }
