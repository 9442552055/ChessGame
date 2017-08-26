import { Injectable } from '@angular/core';
import { ChessColor } from '../ChessColor';
import { ChessPosition } from '../ChessPosition';
import { ChessboardCell } from './ChessboardCell';
import { ICoinShiftable } from '../ICoinShiftable'

@Injectable()
export class ChessboardService implements ICoinShiftable {
    private __chessBoardCells: ChessboardCell[][] = [];
    private __selectedCell: any = {};
    private __turnIsWith: ChessColor = ChessColor.white;
    private __positionsToMove: ChessPosition[];
    private __removedCoins = [];

    AddPlaceHolder(placeHolder: ChessboardCell): void {
        if (!this.__chessBoardCells[placeHolder.ChessCellPosition.Row]) {
            this.__chessBoardCells[placeHolder.ChessCellPosition.Row] = [];
        }
        this.__chessBoardCells[placeHolder.ChessCellPosition.Row][placeHolder.ChessCellPosition.Column] = placeHolder;
    }
    __clearPlacesToMove = (): void => {
        for (var a = 0; a < this.__positionsToMove.length; a++) {
            this.__chessBoardCells[this.__positionsToMove[a].Row][this.__positionsToMove[a].Column].IsCoinShiftable = false;
        }
        this.__positionsToMove = [];
    }

    __switchTurn = (color: ChessColor): void => {
        this.__turnIsWith = color == ChessColor.white ? ChessColor.black : ChessColor.white;
        this.__selectedCell = {};
        this.__clearPlacesToMove();
    }

    __setPlacesToMove = (selectedCell: ChessboardCell): void => {
        this.__positionsToMove = selectedCell.CurrentCoin.GetShiftablePlaces();
        for (var a = 0; a < this.__positionsToMove.length; a++) {
            this.__chessBoardCells[this.__positionsToMove[a].Row][this.__positionsToMove[a].Column].IsCoinShiftable = true;
        }
    }

    SelectCell(cellToSelect: any): void {
        if (Object.getOwnPropertyNames(this.__selectedCell).length) { //Already coin choosen to move

            if (!this.__chessBoardCells[cellToSelect.ChessCellPosition.Row][cellToSelect.ChessCellPosition.Column].IsCoinShiftable) {
                return;
            }
            this.__selectedCell.IsSelected = false;
            //this.__selectedCell = cellToSelect;
            if (cellToSelect.CurrentCoin) {
                this.__removedCoins.push({ ...cellToSelect.CurrentCoin })
            }
            cellToSelect.CurrentCoin = this.__selectedCell.CurrentCoin;
            cellToSelect.CurrentCoin.ChessCellPosition = cellToSelect.ChessCellPosition;
            this.__selectedCell.CurrentCoin = null;
            this.__switchTurn(this.__turnIsWith);
        }
        else if (cellToSelect.CurrentCoin && this.__turnIsWith == cellToSelect.CurrentCoin.Color) { // Coin selection to move
            this.__selectedCell.IsSelected = false;
            cellToSelect.IsSelected = true;
            this.__selectedCell = cellToSelect;
            this.__setPlacesToMove(this.__selectedCell)
        }

    }

    UnSelectCell(cellToUnselect: any): void {
        this.__clearPlacesToMove();
        cellToUnselect.IsSelected = false;
        this.__selectedCell = {}
    }

    UpdateCoinMove(coin: any): void {
        this.__chessBoardCells[coin.ChessCellPosition.Row][coin.ChessCellPosition.Column].CurrentCoin = coin;
    }


}

export default ChessboardService;
