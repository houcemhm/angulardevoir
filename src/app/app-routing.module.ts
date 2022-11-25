import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
import { BooksComponent } from './books/books.component';
import { SearchByAuthorComponent } from './search-by-author/search-by-author.component';
import { SearchByTitleComponent } from './search-by-title/search-by-title.component';
import { AuthorsListComponent } from './authors-list/authors-list.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { BookGuard } from './book.guard';

const routes: Routes = [
{path:  "books",component:BooksComponent},
{path:"addBook",component:AddBookComponent,canActivate:[BookGuard]},
{path: "updateBook/:id", component: UpdateBookComponent},
{path:"searchByAuth",component:SearchByAuthorComponent},
{path:"searchByTitle",component:SearchByTitleComponent},
{path:"authorsList",component:AuthorsListComponent},
{path:"",redirectTo:"books",pathMatch:"full"},
{path: 'login', component: LoginComponent},
{path: 'app-forbidden', component: ForbiddenComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
