import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../services/api.service';
import { SearchResponse } from 'src/app/core/models/book-response.model';

@Injectable({
  providedIn: 'root'
})
export class BooksSearchService {

  constructor(private apiService: ApiService) {}

  getAllBooks(subjectName: string): Observable<SearchResponse> {
    const limit = 10;
    return this.apiService.get(`/search.json?q=${subjectName.toLowerCase().split(' ').join('_')}&limit=${limit}`);
  }
}
