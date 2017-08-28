
import { AbstractChessCoin } from "./AbstractChessCoin";

export interface ICoinShiftable {
    UpdateCoinMove(coin: AbstractChessCoin): void;
}
export default ICoinShiftable;