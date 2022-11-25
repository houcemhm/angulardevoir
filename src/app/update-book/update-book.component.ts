import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from "@angular/router";
import { Book } from '../model/book.model';
import { BookService } from "../services/book.service";
import Swal from 'sweetalert2';
import { Author } from '../model/author.model';
@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html'
})
export class UpdateBookComponent implements OnInit {
  currentBook=new Book();
  authors!:Author[];
  updatedAuthId! : number;
  updatedAuthor!: Author;
  constructor(private activatedRoute:ActivatedRoute,
    private bookService:BookService,private router:Router) {

     }

  ngOnInit(): void {
    this.bookService.authorList().subscribe((auths)=>{
      this.authors=auths._embedded.authors;
    });
   

    this.bookService.findBook(this.activatedRoute.snapshot.params['id']).
     subscribe(book=>{this.currentBook=book;
    this.updatedAuthId=this.currentBook.author.idAuth;
    })
  }
  updateBook(){
    console.log(this.updatedAuthId);
    
    this.updatedAuthor=this.authors.find(auth=>
      auth.idAuth==this.updatedAuthId
    )!;
    this.currentBook.author=this.updatedAuthor;
    console.log(this.updatedAuthor);
    
    this.bookService.updateBook(this.currentBook).subscribe(()=>
    {this.router.navigate(['books']);}
    );
    

    const Toast = Swal.mixin({
      toast: true,
      position: 'bottom-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })

    Toast.fire({
      icon: 'success',
      title: 'Book updated successfully'
    });
  }

}
