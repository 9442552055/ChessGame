
import { AbstractChessCoin } from "./AbstractChessCoin";

export interface ICoinShiftable {
    UpdateCoinMove(coin: AbstractChessCoin): void;
    Select(coin: AbstractChessCoin): void;
    UnSelect(coin: AbstractChessCoin): void;
}
export default ICoinShiftable;