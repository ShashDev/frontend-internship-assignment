import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, filter } from 'rxjs';
import { Book } from 'src/app/core/models/book-response.model';
import { BooksSearchService } from '../../core/services/bookSearch.service';
@Component({
  selector: 'front-end-internship-assignment-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  bookSearch: FormControl;
  searchFor: string = 'Javascript';
  allBooks: Book[] = [];
  isLoading: boolean = false;
  constructor(private bookSearchService: BooksSearchService) {
    this.bookSearch = new FormControl(this.searchFor);
  }

  trendingSubjects: Array<any> = [
    { name: 'JavaScript' },
    { name: 'CSS' },
    { name: 'HTML' },
    { name: 'Harry Potter' },
    { name: 'Crypto' },
  ];

  searchBooks() {
    this.bookSearchService.getAllBooks(this.searchFor).subscribe((data) => {
      this.allBooks = data?.docs;
      this.isLoading = false;
      console.log(this.allBooks);
    });
    //  this.bookSearchService.getAllBooks(this.searchFor).subscribe((data) => {

    //  });
  }
  ngOnInit(): void {
    this.bookSearch.valueChanges
      .pipe(debounceTime(300))
      .subscribe((value: string) => {});
  }
}
