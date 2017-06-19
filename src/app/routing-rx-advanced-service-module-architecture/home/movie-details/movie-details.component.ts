import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Location} from '@angular/common';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import {ApiService} from '../../core/api.service';
import {Movie} from '../../../shared/types';
import {BACKDROP_URL_TOKEN} from '../../di';

@Component({
  selector: 'hf-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie: Movie = new Movie();

  constructor(private route: ActivatedRoute,
              private location: Location,
              private api: ApiService,
              @Inject(BACKDROP_URL_TOKEN) private backdropUrl: string) {
  }

  ngOnInit() {
    /**
     * Get the id of movies from URL then fetch the movie from backend
     */
    this.route.paramMap
      .map((params: ParamMap) => params.get('id'))
      .switchMap(id => this.api.getMovieById(id))
      .subscribe((movie: Movie) => this.movie = movie);
  }

  getCover(path: string) {
    /**
     * Concat the back drop url + path
     */
    return `${this.backdropUrl}${path}`
  }

  back() {
    /**
     * Go back to the previous location
     */
    this.location.back();
  }
}
