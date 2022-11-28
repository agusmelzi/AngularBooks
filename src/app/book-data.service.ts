import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Book } from './book-list/Book';

const URL = 'https://62c38328876c4700f53d60be.mockapi.io/api/angularBooks';

@Injectable({
  providedIn: 'root'
})
export class BookDataService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Book[]> {
    return this.http.get<Book[]>(URL)
              .pipe(
                tap((books: Book[]) => books.forEach(book => book.quantity = 0))
              );
  }
}
