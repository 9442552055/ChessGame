
import { ChessboardService } from "./ChessboardService";

var chessboardService = new ChessboardService();
export let ChessboardServiceFactory = () => {
    console.log('inside');
    return chessboardService;
};
export default ChessboardServiceFactory;