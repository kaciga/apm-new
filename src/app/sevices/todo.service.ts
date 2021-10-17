import { Injectable } from '@angular/core';
import { ITodo } from '../todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  getTodos(): ITodo[] {
    return [
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
    ]
  }

  constructor() { }
}
