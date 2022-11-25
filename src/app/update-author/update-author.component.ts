import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Author } from '../model/author.model';

@Component({
  selector: 'app-update-author',
  templateUrl: './update-author.component.html',
  styleUrls: ['./update-author.component.css']
})
export class UpdateAuthorComponent implements OnInit {
  @Input()
  author! : Author;

  @Output()
  authorUpdated = new EventEmitter<Author>();
  @Input()
  add!:boolean;
  

  constructor() { }

  ngOnInit(): void {
    console.log(this.author);
}
saveAuthor(){
this.authorUpdated.emit(this.author);
}

editAuthor(){
  
}

}
    

