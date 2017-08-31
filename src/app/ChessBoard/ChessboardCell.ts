
import { ElementRef, Component, Input, OnInit, Inject, AfterContentInit, AfterContentChecked, AfterViewChecked, /*ViewChild, ChangeDetectorRef, ChangeDetectionStrategy*/ } from '@angular/core';
import { AbstractChessCoin, ChessColor, ChessPosition, IChessboardCell, ICoinInitializer } from "../Base";


import ChessboardService from "./ChessboardService";

@Component({
    selector: 'chessboard-cell',
    templateUrl: './ChessboardCell.html',
    styleUrls: ['./Chessboard.css'],
    //changeDetection: ChangeDetectionStrategy.Default,
})
export class ChessboardCell implements OnInit, IChessboardCell {

    //@ViewChild("CurrentCoin") //removed as data flows parent to child and not child to parent
    CurrentCoin: AbstractChessCoin;

    IsSelected: boolean;
    IsCoinShiftable: boolean;
    IsCoinLocked: boolean;
    get top(): any {
        return this.elementRef.nativeElement.firstElementChild.offsetTop
    }
    get left(): any {
        //var remainingSpace = this.elementRef.nativeElement.firstElementChild.offsetLeft - this.elementRef.nativeElement.firstElementChild.offsetWidth;
        return this.elementRef.nativeElement.firstElementChild.offsetLeft;// + (remainingSpace / 2)
    }

    @Input('ChessCellPosition')
    ChessCellPosition: ChessPosition;
    private __chessboardService: ChessboardService;
    private __coinInitializer: ICoinInitializer;
    //ChangeDetector: ChangeDetectorRef;
    constructor(private elementRef: ElementRef, @Inject('ChessboardService') private ChessboardService: ChessboardService) {
        this.__chessboardService = ChessboardService;
    }

    ngOnInit(): void {
        this.__chessboardService.AddPlaceHolder(this);
        // console.log(this.elementRef.nativeElement);
    }

    OnClick(): void {
        if (!this.IsSelected) {
            this.__chessboardService.SelectCell(this);
        }
        else {
            this.__chessboardService.UnSelectCell(this);
        }
    };

};

export default ChessboardCell;
