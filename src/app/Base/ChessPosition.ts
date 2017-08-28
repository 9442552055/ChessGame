import ChessColor from  './ChessColor'

export class ChessPosition {
    Row: number;
    Column: number;
    constructor(row: number, column: number) {
        this.Row = row;
        this.Column = column;
    }
    get Color() {
        return ((this.Row + this.Column) % 2) == 1 ? ChessColor.black : ChessColor.white;
    }
}

export default ChessPosition;