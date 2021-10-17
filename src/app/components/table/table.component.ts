import { Component, OnInit } from '@angular/core';
import { faCheck, faStar } from '@fortawesome/free-solid-svg-icons';
import { ITodo } from 'src/app/todo';
import { StarsComponent } from '../stars/stars.component';

@Component({
  selector: 'pm-table',
  templateUrl: './table.component.html',
  styles: ['button {background-color: rgb(153, 39, 125, .5); width: 150px}'],
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  onNotify(message: string): void {}
  faCheck = faCheck;
  //faStar = faStar;
  pageTitle = "Táblázat";
  imageWidth = 200;
  imageMargin = 2;
  showImage: boolean = false;
  //listFilter: string = 'Mosdj meg!'
  
  private _listFilter: string = '';
  get listFilter() {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    console.log("set-erben:", value);
    this.filteredTodos = this.performFilter(value);
    
  }

  filteredTodos: ITodo[] = [];

  todos: ITodo[] = [
    {
      "id": 1,
      "feladat": "Kelj fel időben!",
      "ido": "5 óra",
      "hol": "Hálószoba",
      "kinek": "Mindenki",
      "imgUrl": "assets/ebredes.jpg",
      "ar": 0,
      "isDone": true,
      "star": 2,

    },
    {
      "id": 2,
      "feladat": "Mosdj meg!",
      "ido": "5:10 óra",
      "hol": "Fürdőszoba",
      "kinek": "Mindenki",
      "imgUrl": "assets/ido.jpg",
      "ar": 0,
      "isDone": true,
      "star": 3,
    },
    {
      "id": 3,
      "feladat": "Főzz kávét!",
      "ido": "5:15 óra",
      "hol": "Konyha",
      "kinek": "Felnőtteknek",
      "ar": 2,
      "imgUrl": "assets/coffee.jpg",
      "isDone": false,
      "star": 3.5,
    }
  ];

  constructor() { }
  
  performFilter(filterBy: string): ITodo[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.todos.filter((todo: ITodo) => todo.feladat.toLocaleLowerCase().includes(filterBy));
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    this.listFilter = '';
  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Táblázat: ' + message;
    console.log("ha");
    
  }

}