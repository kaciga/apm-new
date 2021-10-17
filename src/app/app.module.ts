import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TodoListsComponent } from './components/todo-lists/todo-lists.component';
import { TableComponent } from './components/table/table.component';
import { FormsModule } from '@angular/forms';
import { StarsComponent } from './components/stars/stars.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodoListsComponent,
    TableComponent,
    StarsComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
