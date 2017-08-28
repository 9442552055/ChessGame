
import { Solider, Tower, Horse, Bishop, Queen, King } from './'
import { ICoinInitializer, IChessboardCell, ChessColor, ChessPosition } from "../Base";

export class CoinInitializer implements ICoinInitializer{
    LoadCoin(cell: IChessboardCell): void {
         if (cell.ChessCellPosition.Row == 0) {
            if (cell.ChessCellPosition.Column == 0 || cell.ChessCellPosition.Column == 7) {
                cell.CurrentCoin = new Tower(null, null);
                cell.CurrentCoin.Color = ChessColor.black;
                cell.CurrentCoin.ChessCoinPosition = new ChessPosition(cell.ChessCellPosition.Row, cell.ChessCellPosition.Column)

            }
            else if (cell.ChessCellPosition.Column == 1 || cell.ChessCellPosition.Column == 6) {
                cell.CurrentCoin = new Horse(null, null);
                cell.CurrentCoin.Color = ChessColor.black;
                cell.CurrentCoin.ChessCoinPosition = new ChessPosition(cell.ChessCellPosition.Row, cell.ChessCellPosition.Column)
            }
            else if (cell.ChessCellPosition.Column == 2 || cell.ChessCellPosition.Column == 5) {
                cell.CurrentCoin = new Bishop(null, null);
                cell.CurrentCoin.Color = ChessColor.black;
                cell.CurrentCoin.ChessCoinPosition = new ChessPosition(cell.ChessCellPosition.Row, cell.ChessCellPosition.Column)
            }
            else if (cell.ChessCellPosition.Column == 4) {
                cell.CurrentCoin = new Queen(null, null);
                cell.CurrentCoin.Color = ChessColor.black;
                cell.CurrentCoin.ChessCoinPosition = new ChessPosition(cell.ChessCellPosition.Row, cell.ChessCellPosition.Column)
            }
            else if (cell.ChessCellPosition.Column == 3) {
                cell.CurrentCoin = new King(null, null);
                cell.CurrentCoin.Color = ChessColor.black;
                cell.CurrentCoin.ChessCoinPosition = new ChessPosition(cell.ChessCellPosition.Row, cell.ChessCellPosition.Column)
            }
        }
        else if (cell.ChessCellPosition.Row == 1) {
            cell.CurrentCoin = new Solider(null, null);
            cell.CurrentCoin.Color = ChessColor.black;
            cell.CurrentCoin.ChessCoinPosition = new ChessPosition(cell.ChessCellPosition.Row, cell.ChessCellPosition.Column)
        }
        else if (cell.ChessCellPosition.Row == 6) {
            cell.CurrentCoin = new Solider(null, null);
            cell.CurrentCoin.Color = ChessColor.white;
            cell.CurrentCoin.ChessCoinPosition = new ChessPosition(cell.ChessCellPosition.Row, cell.ChessCellPosition.Column)
        }
        else if (cell.ChessCellPosition.Row == 7) {
            if (cell.ChessCellPosition.Column == 0 || cell.ChessCellPosition.Column == 7) {
                cell.CurrentCoin = new Tower(null, null);
                cell.CurrentCoin.Color = ChessColor.white;
                cell.CurrentCoin.ChessCoinPosition = new ChessPosition(cell.ChessCellPosition.Row, cell.ChessCellPosition.Column)
            }
            else if (cell.ChessCellPosition.Column == 1 || cell.ChessCellPosition.Column == 6) {
                cell.CurrentCoin = new Horse(null, null);
                cell.CurrentCoin.Color = ChessColor.white;
                cell.CurrentCoin.ChessCoinPosition = new ChessPosition(cell.ChessCellPosition.Row, cell.ChessCellPosition.Column)
            }
            else if (cell.ChessCellPosition.Column == 2 || cell.ChessCellPosition.Column == 5) {
                cell.CurrentCoin = new Bishop(null, null);
                cell.CurrentCoin.Color = ChessColor.white;
                cell.CurrentCoin.ChessCoinPosition = new ChessPosition(cell.ChessCellPosition.Row, cell.ChessCellPosition.Column)
            }
            else if (cell.ChessCellPosition.Column == 4) {
                cell.CurrentCoin = new Queen(null, null);
                cell.CurrentCoin.Color = ChessColor.white;
                cell.CurrentCoin.ChessCoinPosition = new ChessPosition(cell.ChessCellPosition.Row, cell.ChessCellPosition.Column)
            }
            else if (cell.ChessCellPosition.Column == 3) {
                cell.CurrentCoin = new King(null, null);
                cell.CurrentCoin.Color = ChessColor.white;
                cell.CurrentCoin.ChessCoinPosition = new ChessPosition(cell.ChessCellPosition.Row, cell.ChessCellPosition.Column)
            }
        }
    }
}