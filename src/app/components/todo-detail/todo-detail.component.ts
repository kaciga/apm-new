import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { ITodo } from 'src/app/todo';

@Component({
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {
  pageTitle: string = "A tennivalóink részletei";
  //todo: ITodo = {}; ne üres tömb legyen, hanem undefined, mert httpről később kapjuk vissza, így a beolvasásig nincs type meghatározva
  todo: ITodo | undefined;
  faChevronLeft = faChevronLeft;

  constructor(
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    //activatedRoutehoz, mivel az id alatt nem változik a tartalom, snapshot kell a routingban:
    const id = Number(this.route.snapshot.paramMap.get('id')); //mivel az id string vagy null TS-ben, kell a Number()
    this.pageTitle +=`: ${id}`; //template string
    this.todo = {
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
    }
    onBack(): void {
      this.router.navigate(['/todos'])
    }
  }
    
