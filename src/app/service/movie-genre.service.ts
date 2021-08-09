import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieGenre } from '../model/movie-genre.class';
import { Observable } from 'rxjs';

const URL: string = 'http://localhost:8080/api/movie-genre';

@Injectable({
  providedIn: 'root'
})
export class MovieGenreService {

  constructor(
    private http: HttpClient) { }

  list(): Observable<MovieGenre[]> {
    return this.http.get(URL+'/') as Observable<MovieGenre[]>;
  }
}