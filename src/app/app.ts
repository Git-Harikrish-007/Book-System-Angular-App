import { Component, signal } from '@angular/core';
import { BookList } from './book/book';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BookList],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('book-management-system');
}
