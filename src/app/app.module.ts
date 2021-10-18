import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TodoListsComponent } from './components/todo-lists/todo-lists.component';
import { TableComponent } from './components/table/table.component';
import { FormsModule } from '@angular/forms';
import { StarsComponent } from './components/stars/stars.component';
import { AboutComponent } from './components/about/about.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodoListsComponent,
    TableComponent,
    StarsComponent,
    AboutComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    FormsModule,
    RouterModule.forRoot([
      //{ path: 'welcome', component: WelcomeComponent },
      { path: 'header', component: WelcomeComponent },
      { path: 'table', component: TableComponent },
      { path: 'todos', component: TodoListsComponent },
      { path: 'about', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
     // { path: '**', component: PageNotFoundComponent } vagy  { path: '**', redirectTo: 'welcome', pathMatch: 'full' },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
