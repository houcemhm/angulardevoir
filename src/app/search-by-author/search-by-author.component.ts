import { Component, OnInit } from '@angular/core';
import { Author } from '../model/author.model';
import { Book } from '../model/book.model';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-search-by-author',
  templateUrl: './search-by-author.component.html',
})
export class SearchByAuthorComponent implements OnInit {
  idAuth !:number;
  authors! :Author[];
  books!:Book[];
  constructor(private bookService:BookService) { }

  ngOnInit(): void {
    this.bookService.authorList().subscribe(auths=>this.authors=auths._embedded.authors);
  }

  onChange(){
    this.bookService.searchByAuthor(this.idAuth).subscribe((books)=>
    this.books=books
    );
  }
}
