import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { TodoService } from 'src/app/sevices/todo.service';
import { ITodo } from 'src/app/todo';
//import { StarsComponent } from '../stars/stars.component';
Router

@Component({
  // selector: 'pm-table',
  // template:`
  // <nav>
  //       <a>{{pageTitle}}</a>
  //       <ul>
  //         <li><a routerLinkActive='active' routerLink='/welcome'>Home</a></li>
  //         <li><a routerLinkActive='active' routerLink='/todos'>Teendők</a></li>
  //       </ul>
  //   </nav>
  //   <div class='container'>
  //     <router-outlet></router-outlet>
  //   </div>
  // nav`,
  templateUrl: './table.component.html',
  //styles: ['button {background-color: rgb(153, 39, 125, .5);width: 130px}'],
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  private _todoService: any;
  filteredTodos: ITodo[] | undefined;//automata javítás: | undefined
  onNotify(message: string): void {}
  faCheck = faCheck;
  pageTitle = "Táblázat";
  imageWidth = 200;
  imageMargin = 2;
  showImage: boolean = false;
  //listFilter: string = 'Mosdj meg!'
  
  private _listFilter = '';
  get listFilter() {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    console.log("set-erben:", value);
    this.filteredTodos = this.performFilter(value);
  }

  //private router: Router
  todos: ITodo[] = [];

  /*ez tökugyanaz, mint az utána következő, short hand TS-syntax:
  constructor(todoService: TodoService) { 
    this._todoService = TodoService;
  }*/
  constructor(private todoService: TodoService,
    private router: Router) {

  }
  
  performFilter(filterBy: string): ITodo[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.todos.filter((todo: ITodo) => todo.feladat.toLocaleLowerCase().includes(filterBy));
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    this.todos = this.todoService.getTodos();
    //this.listFilter = this.todos; hiba volt így kikommenteltem, nem engedte ezt a string volta miatt
    //this.listFilter = 'uhh';
  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Táblázat: ' + message;
    console.log("ha");
    
  }

}
