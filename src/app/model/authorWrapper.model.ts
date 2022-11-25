import { Author } from './author.model';
export class AuthorWrapper{
_embedded!: { authors: Author[]};
}