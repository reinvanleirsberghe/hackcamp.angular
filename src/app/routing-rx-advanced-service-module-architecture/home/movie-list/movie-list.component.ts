import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Movie} from '../../../shared/types';
import {MovieLite} from '../../type';
import {mapMovieToMovieLite} from '../../utils';

@Component({
  selector: 'hf-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: []
})
export class MovieListComponent implements OnInit, OnChanges {
  @Input()
  navClosed;

  @Input()
  baseUrlCDN;

  @Input()
  filteredMovies: Movie[] = [];

  filteredMoviesLite: MovieLite[] = [];

  constructor() {
  }

  ngOnInit() {
    this.filteredMoviesLite = this.filteredMovies.map(mapMovieToMovieLite(this.baseUrlCDN));
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.filteredMovies && !changes.filteredMovies.firstChange) {
      this.filteredMoviesLite = changes.filteredMovies.currentValue
        .map(mapMovieToMovieLite(this.baseUrlCDN));
    }
  }
}
