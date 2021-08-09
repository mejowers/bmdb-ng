import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Genre } from '../model/genre.class';
import { Observable } from 'rxjs';

const URL: string = 'http://localhost:8080/api/genres';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  constructor(
    private http: HttpClient) { }

  list(): Observable<Genre[]> {
    return this.http.get(URL+'/') as Observable<Genre[]>;
  }
}

