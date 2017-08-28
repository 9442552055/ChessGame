// import { Injectable } from '@angular/core';
// @Injectable()
import { IChessboardCell } from "./IChessboardCell";

export interface ICoinInitializer {
    LoadCoin(cell: IChessboardCell): void;
}
export default ICoinInitializer;