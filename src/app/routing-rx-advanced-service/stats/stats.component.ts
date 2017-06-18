import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {Observable} from 'rxjs/Observable';
import {Movie} from '../../shared/types';
import {ApiService} from '../api.service';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/groupBy';
import 'rxjs/add/operator/reduce';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/toArray';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/combineLatest';

@Component({
  selector: 'hf-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {
  step1: Observable<Movie[]>;
  step2: Observable<Movie[]>;
  step3: Observable<number>;
  step4: Observable<number>;
  step5: Observable<number>;
  step6: Observable<Movie[]>;

  constructor(private location: Location,
              private api: ApiService) {
  }

  /**
   * DEBUG with .do operator
   */

  ngOnInit() {

    this.step1 = this.doStep1();
    this.step2 = this.doStep2();
    this.step3 = this.doStep3();
    this.step4 = this.doStep4();
    this.step5 = this.doStep5(this.step3, this.step4);
    this.step6 = this.doStep6();
  }

  doStep1(): Observable<Movie[]> {
    /**
     * Get 3 first movies that have the vote_average > 7
     */
    return this.api.getMovies()
      .map((movies: Movie[]) => movies
        .filter((movie: Movie) => movie.vote_average > 7)
        .slice(0, 3))
  }

  doStep2(): Observable<Movie[]> {
    /**
     * Complete to get 3 first movies that have the vote_average > 7
     */
    return this.api.getMovies()
      .switchMap((movies: Movie[]) => Observable.from(movies))
      .filter((movie: Movie) => movie.vote_average > 7)
      .take(3)
      .toArray();
  }

  doStep3(): Observable<number> {
    /**
     * Complete to calculate the sum of vote_average for all movies
     */
    return this.api.getMovies()
      .switchMap((movies: Movie[]) => Observable.from(movies))
      .scan((sum: number, next: Movie) => {
        return sum + next.vote_average
      }, 0);
  }

  doStep4(): Observable<number> {
    /**
     * Complete to number of movies without using .scan
     *
     * ? Do you find the difference between .scan
     */
    return this.api.getMovies()
      .switchMap((movies: Movie[]) => Observable.from(movies))
      .reduce((counter: number, next: Movie) => {
        return ++counter;
      }, 0);
  }

  doStep5(sumOfCodeAverage: Observable<number>, countMovies: Observable<number>): Observable<number> {
    /**
     * Using sumOfCodeAverage and countMovies Observables, implement the observable
     * to calculate the average of code_average for all movies
     */
    return Observable.combineLatest(sumOfCodeAverage, countMovies)
      .map(([sum, count]) => {
        return sum / count
      });
  }

  doStep6(): Observable<Movie[]> {
    /**
     * Skip the 10 first movies, then group these movies by popularity >= 15 and take only the first one
     */
    return this.api.getMovies()
      .switchMap((movies: Movie[]) => Observable.from(movies))
      .skip(10)
      .groupBy((movie: Movie) => movie.popularity >= 15)
      .flatMap(group => group.reduce((acc, curr) => [...acc, curr], []))
      .first()
  }

  back() {
    this.location.back();
  }
}
