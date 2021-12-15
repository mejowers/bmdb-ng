import { Component, OnInit } from '@angular/core';
import { Genre } from 'src/app/model/genre.class';
import { GenreService } from 'src/app/service/genre.service';

@Component({
  selector: 'app-genre-list',
  templateUrl: './genre-list.component.html',
  styleUrls: ['./genre-list.component.css']
})
export class GenreListComponent implements OnInit {
  genres: Genre[] = [];
  title: string = "Genre List";

  constructor(private genreSvc: GenreService) { }

  ngOnInit(): void {
    this.genreSvc.list().subscribe(
     resp => { this.genres = resp as Genre[]; 
                console.log("list of genres: ", this.genres);},
     err => { console.log(err);}
    );
  
    }
  
}
