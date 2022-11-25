import { Component, OnInit } from '@angular/core';
import { Book } from '../model/book.model';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-search-by-title',
  templateUrl: './search-by-title.component.html',
  styleUrls: ['./search-by-title.component.css']
})
export class SearchByTitleComponent implements OnInit {

  allBooks!:Book[];
  searchTerm!:string;
  books!:Book[];

  constructor(private bookService :BookService) { }

  ngOnInit(): void {
    this.bookService.booksListS().subscribe(books=>
      this.books=books
      );
    

  }

  onKeyUp(filterText:string){
this.books=this.allBooks.filter(item=>
  item.titleBook.toLowerCase().includes(filterText)
  )
  }

  searchBooks(){
    this.bookService.searchByTitle(this.searchTerm).subscribe(books=>
    this.books=books
      )
  }

}
