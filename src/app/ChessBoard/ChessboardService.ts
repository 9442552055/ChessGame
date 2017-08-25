import { Injectable } from '@angular/core';

@Injectable()
export class ChessboardService {
    private __chessBoardCells: any[] = [];
    private __selectedCell: any = {};
    AddPlaceHolder(placeHolder: any): void {
        this.__chessBoardCells.push(placeHolder);
    }

    SelectCell(cellToSelect: any): void {
        this.__selectedCell.IsSelected = false;
        cellToSelect.IsSelected = true;
        this.__selectedCell = cellToSelect;
    }

    UnSelectAll(): void {
        this.__chessBoardCells.forEach(element => {
            element.IsSelected = false;
        });
    }
}

export default ChessboardService;