
import { Solider, Tower, Horse, Bishop, Queen, King } from './'
import { ICoinInitializer, IChessboardCell, ChessColor, ChessPosition, AbstractChessCoin, IChesscoinService } from "../Base";
import { Inject } from '@angular/core';

export class CoinInitializer implements ICoinInitializer {
    private __chesscoinService: IChesscoinService;
    constructor(@Inject('IChesscoinService') private chesscoinService: IChesscoinService) {
        this.__chesscoinService = chesscoinService;
    }
    private __setCellValues = function (coin: AbstractChessCoin, ChessCellPosition: ChessPosition, color: ChessColor): AbstractChessCoin {
        coin.Color = color;
        coin.ChessCoinPosition = new ChessPosition(ChessCellPosition.Row, ChessCellPosition.Column)
        this.__chesscoinService.AddChessCoin(coin)
        //CurrentCoin = coin;
        return coin;
    }
    //LoadCoin(cell: IChessboardCell): void {
    LoadCoin(ChessCellPosition: ChessPosition): AbstractChessCoin {
        if (ChessCellPosition.Row == 0) {
            if (ChessCellPosition.Column == 0 || ChessCellPosition.Column == 7) {
               return this.__setCellValues(new Tower(null, null), ChessCellPosition, ChessColor.black)
            }
            else if (ChessCellPosition.Column == 1 || ChessCellPosition.Column == 6) {
               return this.__setCellValues(new Horse(null, null), ChessCellPosition, ChessColor.black)
            }
            else if (ChessCellPosition.Column == 2 || ChessCellPosition.Column == 5) {
               return this.__setCellValues(new Bishop(null, null), ChessCellPosition, ChessColor.black)
            }
            else if (ChessCellPosition.Column == 4) {
               return this.__setCellValues(new Queen(null, null), ChessCellPosition, ChessColor.black)
            }
            else if (ChessCellPosition.Column == 3) {
               return this.__setCellValues(new King(null, null), ChessCellPosition, ChessColor.black)
            }
        }
        else if (ChessCellPosition.Row == 1) {
           return this.__setCellValues(new Solider(null, null), ChessCellPosition, ChessColor.black)
        }
        else if (ChessCellPosition.Row == 6) {
           return this.__setCellValues(new Solider(null, null), ChessCellPosition, ChessColor.white)
        }
        else if (ChessCellPosition.Row == 7) {
            if (ChessCellPosition.Column == 0 || ChessCellPosition.Column == 7) {
               return this.__setCellValues(new Tower(null, null), ChessCellPosition, ChessColor.white)
            }
            else if (ChessCellPosition.Column == 1 || ChessCellPosition.Column == 6) {
               return this.__setCellValues(new Horse(null, null), ChessCellPosition, ChessColor.white)
            }
            else if (ChessCellPosition.Column == 2 || ChessCellPosition.Column == 5) {
               return this.__setCellValues(new Bishop(null, null), ChessCellPosition, ChessColor.white)
            }
            else if (ChessCellPosition.Column == 4) {
               return this.__setCellValues(new Queen(null, null), ChessCellPosition, ChessColor.white)
            }
            else if (ChessCellPosition.Column == 3) {
               return this.__setCellValues(new King(null, null), ChessCellPosition, ChessColor.white)
            }
        }
    }
}