import { Injectable } from '@angular/core';
import { VirtualTimeScheduler } from 'rxjs';
import { Author } from '../model/author.model';
import { Book } from '../model/book.model';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { apiURL,apiUrlAuth } from '../config';
import { AuthorWrapper } from '../model/authorWrapper.model';
import { AuthService } from './auth.service';
const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};

@Injectable({
  providedIn: 'root'
})
export class BookService {

  books !: Book[] ;
  book!:Book;
  authors!:Author[];
  

  constructor(private http:HttpClient ,private authService :AuthService
    ) {
    // console.log("aloooooooooooo");
    // this.authors=[{idAuthor:1,nameAuthor:"houcem",kind:"romantic"},
    //               {idAuthor:2,nameAuthor:"hos",kind:"romantic"}
    //              ];
    // this.books=[
    //   {idBook:1,titleBook:"art of seduction",priceBook:3,descBook:"dd",year:2000,author:{idAuthor:1,nameAuthor:"houcem",kind:"romantic"}},
    //   {idBook:2,titleBook:"1000 Years Joys and Sorrows",priceBook:3,descBook:"1000 Years of Joys and Sorrows. by Ai Weiwei.",year:2000,author:{idAuthor:1,nameAuthor:"houcem",kind:"romantic"}},
    //   {idBook:3,titleBook:"laloli",priceBook:3,descBook:"dd",year:2000,author:{idAuthor:1,nameAuthor:"houcem",kind:"romantic"}},
    //   {idBook:4,titleBook:"Acts of Desperation",priceBook:3,descBook:"Acts of Desperation. by Megan Nolan.",year:2000,author:{idAuthor:1,nameAuthor:"houcem",kind:"romantic"}}
    // ];
  }
booksListS():Observable<Book[]>{
return this.http.get<Book[]>(apiURL+"/all");
}


  addBookS(book:Book):Observable<Book>{
  
   return this.http.post<Book>(apiURL ,book);
  }
  deleteBook(id:number){
    const url = `${apiURL}/${id}`;
   
    return this.http.delete(url);    
}
findBook(id:number):Observable<Book>{
  const url =`${apiURL}/${id}`;
 
  return this.http.get<Book>(url);
  
}


sortBooks(){
 this.books= this.books.sort((n1  ,n2  )=>
 n1.idBook!-n2.idBook!
 );
}
updateBook(book:Book){
  
  return this.http.put<Book>(apiURL, book);
}
authorList():Observable<AuthorWrapper>{
  
  
  return this.http.get<AuthorWrapper>(apiUrlAuth);
  } 

findAuthor(id: number):Author{
  return this.authors.find(auth=>auth.idAuth==id) as Author;
}

searchByTitle(title:String):Observable<Book[]>{
const url =`${apiURL}/findByTitle/${title}`;
  return this.http.get<Book[]>(url);
}


  searchByAuthor(idAuth: number): Observable<Book[]> {
    const url = `${apiURL}/booksauth/${idAuth}`;
    return this.http.get<Book[]>(url);
}

saveAuthor(auth:Author):Observable<Author>{
return this.http.post<Author>(apiUrlAuth,auth,httpOptions);
}
}
