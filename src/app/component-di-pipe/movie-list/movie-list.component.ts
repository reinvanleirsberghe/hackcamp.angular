import {Component, Input, OnInit} from '@angular/core';
import {Movie} from '../../shared/types';
import {movies} from '../../shared/mocks/movies';

@Component({
  selector: 'hf-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls:[]
})
export class MovieListComponent implements OnInit {

  @Input()
  navClosed;

  @Input()
  baseUrlCDN;

  movies: Movie[] = movies.slice(0, 50);
  filteredMovies: Movie[] = movies.slice(0, 50);


  constructor() {
  }

  ngOnInit() {
  }


}
