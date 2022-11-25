import { Author } from "./author.model";

export class Book {
  idBook! :number;
  titleBook! :String;
  priceBook! : number;
  description! :String;
  year! :number;
  author!:Author;
}
