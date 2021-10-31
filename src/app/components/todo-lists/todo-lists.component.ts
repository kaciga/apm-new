import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//Router
//import { TodoDetailComponent } from '../todo-detail/todo-detail.component';
//TodoDetailComponent

@Component({
  selector: 'pm-todo-lists',
  templateUrl: './todo-lists.component.html',
  styleUrls: ['./todo-lists.component.css']
})
export class TodoListsComponent implements OnInit {
  

  constructor(private router: Router) { }//private router: Router

  ngOnInit(): void {}

  toggleAddTodo() {
    console.log("toggle");
    //this.router.navigate([/'todo-detail']);
  }
  
  onBack(): void {
    this.router.navigate(['/todos'])
  }
}
