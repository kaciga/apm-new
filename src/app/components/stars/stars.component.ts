import { Component, Input, OnChanges, OnInit, Output, EventEmitter } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'pm-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})

export class StarsComponent implements OnChanges {
  faStar = faStar;
  @Input() rating: number = 0;
  cropWidth: number = 75;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit(): void {}

  ngOnChanges(): void {
    this.cropWidth = this.rating * 75/5;
  }

  onClick(): void {
  this.ratingClicked.emit(`A tetszésnyilvánításra ${this.rating} kattintottál!`);
    console.log("haha"); //nem műxik, nem íródik ki konzolra

  }
  
}
