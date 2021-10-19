import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pm-todo-lists',
  templateUrl: './todo-lists.component.html',
  styleUrls: ['./todo-lists.component.css']
})
export class TodoListsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  toggleAddTodo() {
    console.log("toggle");
    
  }

}
