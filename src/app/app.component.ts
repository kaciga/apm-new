import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'pm-root',
  template: `
  <nav>
    <a>{{ pageTitle }}</a>
    <ul>
      <li><a>Home</a></li>
      <li><a>Todok listája</a></li>
    </ul>
  </nav>
`,
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
})

export class AppComponent {
  pageTitle: string = "Megeszem a kalapom"
}
