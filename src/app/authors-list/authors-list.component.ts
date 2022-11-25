import { Component, Input, OnInit } from '@angular/core';
import { Author } from '../model/author.model';
import { BookService } from '../services/book.service';
@Component({
  selector: 'app-authors-list',
  templateUrl: './authors-list.component.html'
})
export class AuthorsListComponent implements OnInit {

  
  add:boolean=true;

  private _authors!: Author[];
  public get authors(): Author[] {
    return this._authors;
  }
  public set authors(value: Author[]) {
    this._authors = value;
  }
  updatedAuthor:Author={"idAuth":0,"nameAuth":"","kind":""}
  constructor(private bookService :BookService) { }

  ngOnInit(): void {
    this.bookService.authorList().subscribe(authors=>
      
      this.authors=authors._embedded.authors);
  }

  chargerAuthors(){
    this.bookService.authorList().
    subscribe(auths => {this.authors = auths._embedded.authors;
    console.log(auths);
    });
    } 
     authorUpdated(auth:Author){
    console.log(auth);
      console.log("auth updated event",auth);
    this.bookService.saveAuthor(auth).
     subscribe( ()=>this.chargerAuthors() );
  }
    editAuth(auth:Author) {
      this.updatedAuthor=auth;
      this.add=false;
      }

}
