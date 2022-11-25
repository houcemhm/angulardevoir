import { Component, OnInit } from '@angular/core';
import { Book } from '../model/book.model';
import { BookService } from '../services/book.service';
import  Swal  from "sweetalert2";
import { Author } from '../model/author.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
})
export class AddBookComponent implements OnInit {
newBook =new Book();
newIdAuth!: number;
newAuthor!: Author;

authors!:Author[];
  constructor(private bookService :BookService,private router: Router) { }
ngOnInit(): void {
  this.bookService.authorList().subscribe((authors)=>{
    this.authors=authors._embedded.authors;
    })
}
addBook(){
  this.newAuthor=this.authors.find(auth=>auth.idAuth==this.newIdAuth)!;
 this.newBook.author=this.newAuthor;
  this.bookService.addBookS(this.newBook).subscribe(book=>{
    console.log(book);
      this.router.navigate(['books']);
    
  });
  console.log(this.newAuthor);



   const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 5000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

  Toast.fire({
    icon: 'success',
    title: 'Book updated successfully'
  })
}

}
