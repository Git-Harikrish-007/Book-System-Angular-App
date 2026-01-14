import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Book } from '../models/book.model';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  imports: [FormsModule, CommonModule],
  templateUrl: './book.html',
  styleUrl: './book.css',
})
export class BookList implements OnInit {
  newTitle: String = '';
  newAuthor: String = '';

  books: Book[] = [];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const savedBooks = localStorage.getItem('books');
      this.books = savedBooks ? JSON.parse(savedBooks) : [];
    } else {
      this.books = [];
    }
  }

  addBook() {
    if (this.newTitle.trim().length && this.newAuthor.trim().length) {
      let newBook: Book = {
        id: Date.now(),
        title: this.newTitle,
        author: this.newAuthor,
      };
      this.books.push(newBook);

      this.newTitle = '';
      this.newAuthor = '';

      localStorage.setItem('books', JSON.stringify(this.books));
    }
  }

  deleteBook(index: number) {
    this.books.splice(index, 1);

    localStorage.setItem('books', JSON.stringify(this.books));
  }
}
