
import { Solider, Tower, Horse, Bishop, Queen, King } from './'
import { ICoinInitializer, IChessboardCell, ChessColor, ChessPosition, AbstractChessCoin } from "../Base";

export class CoinInitializer implements ICoinInitializer {
    private __setCellValues = function (coin: AbstractChessCoin, cell: IChessboardCell, color: ChessColor): void {
        cell.CurrentCoin = coin;
        cell.CurrentCoin.Color = color;
        cell.CurrentCoin.ChessCoinPosition = new ChessPosition(cell.ChessCellPosition.Row, cell.ChessCellPosition.Column)
    }
    LoadCoin(cell: IChessboardCell): void {
        if (cell.ChessCellPosition.Row == 0) {
            if (cell.ChessCellPosition.Column == 0 || cell.ChessCellPosition.Column == 7) {
                this.__setCellValues(new Tower(null, null), cell, ChessColor.black)
            }
            else if (cell.ChessCellPosition.Column == 1 || cell.ChessCellPosition.Column == 6) {
                this.__setCellValues(new Horse(null, null), cell, ChessColor.black)
            }
            else if (cell.ChessCellPosition.Column == 2 || cell.ChessCellPosition.Column == 5) {
                this.__setCellValues(new Bishop(null, null), cell, ChessColor.black)
            }
            else if (cell.ChessCellPosition.Column == 4) {
                this.__setCellValues(new Queen(null, null), cell, ChessColor.black)
            }
            else if (cell.ChessCellPosition.Column == 3) {
                this.__setCellValues(new King(null, null), cell, ChessColor.black)
            }
        }
        else if (cell.ChessCellPosition.Row == 1) {
            this.__setCellValues(new Solider(null, null), cell, ChessColor.black)
        }
        else if (cell.ChessCellPosition.Row == 6) {
            this.__setCellValues(new Solider(null, null), cell, ChessColor.white)
        }
        else if (cell.ChessCellPosition.Row == 7) {
            if (cell.ChessCellPosition.Column == 0 || cell.ChessCellPosition.Column == 7) {
                 this.__setCellValues(new Tower(null, null), cell, ChessColor.white)
            }
            else if (cell.ChessCellPosition.Column == 1 || cell.ChessCellPosition.Column == 6) {
                 this.__setCellValues(new Horse(null, null), cell, ChessColor.white)
            }
            else if (cell.ChessCellPosition.Column == 2 || cell.ChessCellPosition.Column == 5) {
                 this.__setCellValues(new Bishop(null, null), cell, ChessColor.white)
            }
            else if (cell.ChessCellPosition.Column == 4) {
                 this.__setCellValues(new Queen(null, null), cell, ChessColor.white)
            }
            else if (cell.ChessCellPosition.Column == 3) {
                 this.__setCellValues(new King(null, null), cell, ChessColor.white)
            }
        }
    }
}