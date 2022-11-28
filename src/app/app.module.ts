import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { LibraryAboutComponent } from './library-about/library-about.component';
import { CartComponent } from './cart/cart.component';
import { LibraryBooksComponent } from './library-books/library-books.component';

import { FormsModule } from "@angular/forms";
import { InputIntegerComponent } from './input-integer/input-integer.component';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    LibraryAboutComponent,
    CartComponent,
    LibraryBooksComponent,
    InputIntegerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
