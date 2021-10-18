import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pm-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  pageTitle: string = "Rólam";

  constructor() { }

  ngOnInit(): void {
  }

}
