import { Injectable, ChangeDetectorRef } from '@angular/core';
import { ChessColor, ICoinShiftable, ChessPosition, AbstractChessCoin } from '../Base';
import { ChessboardCell } from "./ChessboardCell";

@Injectable()
export class ChessboardService implements ICoinShiftable {
    private __chessBoardCells: ChessboardCell[][] = [];
    private __selectedCell: ChessboardCell;
    private __turnIsWith: ChessColor = ChessColor.white;
    private __positionsToMove: ChessPosition[];
    private __removedCoins = [];

    private __clearPlacesToMove = (): void => {
        for (var a = 0; a < this.__positionsToMove.length; a++) {
            this.__chessBoardCells[this.__positionsToMove[a].Row][this.__positionsToMove[a].Column].IsCoinShiftable = false;
            //this.__chessBoardCells[this.__positionsToMove[a].Row][this.__positionsToMove[a].Column].ChangeDetector.detectChanges();
        }
        this.__positionsToMove = [];
    }

    private __switchTurn = (color: ChessColor): void => {
        this.__turnIsWith = color == ChessColor.white ? ChessColor.black : ChessColor.white;
        this.__selectedCell = undefined;
        this.__clearPlacesToMove();
    }

    private __setPlacesToMove = (selectedCell: ChessboardCell): void => {
        this.__positionsToMove = selectedCell.CurrentCoin.GetShiftablePlaces();
        for (var a = 0; a < this.__positionsToMove.length; a++) {
            this.__chessBoardCells[this.__positionsToMove[a].Row][this.__positionsToMove[a].Column].IsCoinShiftable = true;
        }
    }

    AddPlaceHolder(placeHolder: ChessboardCell): void {
        if (!this.__chessBoardCells[placeHolder.ChessCellPosition.Row]) {
            this.__chessBoardCells[placeHolder.ChessCellPosition.Row] = [];
        }
        this.__chessBoardCells[placeHolder.ChessCellPosition.Row][placeHolder.ChessCellPosition.Column] = placeHolder;
    }

    SelectCell(cellToSelect: ChessboardCell): void {
        if (this.__selectedCell && Object.getOwnPropertyNames(this.__selectedCell).length) { //Already coin choosen to move

            if (!this.__chessBoardCells[cellToSelect.ChessCellPosition.Row][cellToSelect.ChessCellPosition.Column].IsCoinShiftable) {
                return;
            }
            var moved = this.__selectedCell.CurrentCoin.MoveTo(cellToSelect.ChessCellPosition);
            if (moved) {
                this.__selectedCell.IsSelected = false;
                if (cellToSelect.CurrentCoin) {
                    this.__removedCoins.push({ ...cellToSelect.CurrentCoin })
                }
                cellToSelect.CurrentCoin = this.__selectedCell.CurrentCoin;
                this.__selectedCell.CurrentCoin = undefined;
                this.__switchTurn(this.__turnIsWith);
            }
            else {
                this.__selectedCell.IsCoinLocked = true;
            }
            //this.__selectedCell.IsSelected = false;
            // if (cellToSelect.CurrentCoin) {
            //     this.__removedCoins.push({ ...cellToSelect.CurrentCoin })
            // }
            // cellToSelect.CurrentCoin = this.__selectedCell.CurrentCoin;
            // cellToSelect.CurrentCoin.MoveTo(cellToSelect.ChessCellPosition);
            //this.__selectedCell.CurrentCoin = null;
            //this.__switchTurn(this.__turnIsWith);
        }
        else if (cellToSelect.CurrentCoin && this.__turnIsWith == cellToSelect.CurrentCoin.Color) { // Coin selection to move
            cellToSelect.IsSelected = true;
            this.__selectedCell = cellToSelect;
            this.__setPlacesToMove(this.__selectedCell)
        }

    }

    UnSelectCell(cellToUnselect: ChessboardCell): void {
        this.__clearPlacesToMove();
        cellToUnselect.IsSelected = false;
        cellToUnselect.IsCoinLocked = false;
        this.__selectedCell = undefined
    }

    UpdateCoinMove(coin: AbstractChessCoin): void {
        this.__chessBoardCells[coin.ChessCoinPosition.Row][coin.ChessCoinPosition.Column].CurrentCoin = coin;
    }


}

export default ChessboardService;
