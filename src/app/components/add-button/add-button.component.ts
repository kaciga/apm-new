import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pm-add-button',
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.css']
})
export class AddButtonComponent implements OnInit {
  @Input() text!: string;
  @Input() color!: string;
  @Output() buttonClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  onClick() {
    this.buttonClick.emit(this.text);
  }

}
