import {Component, OnInit} from '@angular/core';
import {Movie} from '../../shared/types';

@Component({
  selector: 'hf-movie-details',
  templateUrl: './movie-details.component.html',
})
export class MovieDetailsComponent implements OnInit {
  movie: Movie = new Movie();

  constructor() {
  }

  ngOnInit() {
    /**
     * Get the id of movies from URL then fetch the movie from backend
     */
  }

  getCover(path: string) {
    /**
     * Concat the back drop url + path
     */
  }

  back() {
    /**
     * Go back to the previous location
     */

  }
}
