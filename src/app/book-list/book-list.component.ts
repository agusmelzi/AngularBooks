import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  book = {
    "titulo" : "Al asalto del Cielo",
    "autor" : "Louis De Wohl",
    "editorial" : "Arcaduz",
    "imagen" : "/assets/img/al asalto del cielo.jpg"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
