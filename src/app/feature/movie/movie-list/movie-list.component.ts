import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/movie.class';
import { MovieService } from 'src/app/service/movie.service';
import { SystemService } from 'src/app/service/system.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies: Movie[] = [];
  title: string = "Movie List"

  constructor(
    private movieSvc: MovieService,
    private systemSvc: SystemService
    ) { }

  ngOnInit(): void {
    console.log("Movie List, checking loggedInUser in systemSvc:", this.systemSvc.loggedInUser);
    this.movieSvc.list().subscribe(
     resp => { this.movies = resp as Movie[]; 
                console.log("list of movies: ", this.movies);},
     err => { console.log(err);}
    );
  
    }
  

}
