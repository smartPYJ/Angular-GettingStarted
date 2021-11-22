import { Component, Input,EventEmitter ,OnChanges, Output } from "@angular/core";


@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']


})




export class starComponent implements OnChanges {
    @Input() pname : string = ''; 
    @Input() rating: number = 0;
    @Output() ratingClicked:EventEmitter <string> =
    new EventEmitter <string> ();

    cropWidth: number = 75;

    ngOnChanges(): void {

        this.cropWidth = this.rating * 75 / 5;
    }


    onClick() : void {

        this.ratingClicked.emit(`the rating for  ${this.pname} is ${this.rating}`)
    }
}