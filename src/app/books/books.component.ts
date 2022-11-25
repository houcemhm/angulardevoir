import { Component, OnInit } from '@angular/core';
import { Book } from '../model/book.model';
import { BookService } from '../services/book.service';
import Swal from 'sweetalert2';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',

})
export class BooksComponent implements OnInit {

  books? :Book[] ;

  constructor(private bookService:BookService ,public authService:AuthService) {
    // this.books= bookService.booksListS();
  }
  BooksRefresh(){
      this.bookService.booksListS().subscribe(books => {
      console.log(books);
      this.books = books;
      });
  }
  ngOnInit(): void {
  
      this.BooksRefresh();
  }
  deleteBook(b:Book){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.bookService.deleteBook(b.idBook).subscribe(()=>{   
       this.BooksRefresh();
          Swal.fire(
          'Deleted!',
          'This book has been deleted.',
          'success'
        )
        });
       
      }
    })

}

}
