
import { ChessboardService } from "./ChessboardService";

var chessboardService: ChessboardService;
export let ChessboardServiceFactory = () => {
    //console.log("ChessboardServiceFactory ==> " + 'Check whether invoked more than once');
    if (!chessboardService) {
        chessboardService = new ChessboardService();
    }
    return chessboardService;
};
export default ChessboardServiceFactory;