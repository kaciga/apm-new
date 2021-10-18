import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {
  pageTitle: string = "A tennivalóink részletezve";

  constructor() { }

  ngOnInit(): void {
  }

}
