import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Location} from '@angular/common';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import {ApiService} from '../../core/api.service';
import {Movie} from '../../../shared/types';
import {BACKDROP_URL_TOKEN} from '../../di';
import {Observable} from 'rxjs/Observable';
import {Comment} from '../../type';

@Component({
  selector: 'hf-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: [],

})
export class MovieDetailsComponent implements OnInit {
  private id: string;

  movie: Movie = new Movie();

  comments$: Observable<Comment[]>;

  constructor(private route: ActivatedRoute,
              private location: Location,
              private api: ApiService,
              @Inject(BACKDROP_URL_TOKEN) private backdropUrl: string) {
    this.addComment = this.addComment.bind(this);
    this.deleteComment = this.deleteComment.bind(this);
  }

  ngOnInit() {
    /**
     * Get the id of movies from URL then fetch the movie from backend
     */
    const id$ = this.route.paramMap
      .map((params: ParamMap) => params.get('id'))
      .do((id: string) => this.id = id);

    const movie$ = id$.switchMap(id => this.api.getMovieById(id))
      .subscribe((movie: Movie) => this.movie = movie);

    // Uncomment the line below, when you will need it
    // this.comments$ = id$.switchMap(id => this.api.getCommentsByMovieId(parseInt(id, 10)));
  }

  getCover(path: string) {
    /**
     * Concat the back drop url + path
     */
    return `${this.backdropUrl}${path}`;
  }

  back() {
    /**
     * Go back to the previous location
     */
    this.location.back();
  }

  addComment({ author, comment: content }: { author: string, comment: string }) {
  }

  deleteComment(comment: Comment) {
  }


}
