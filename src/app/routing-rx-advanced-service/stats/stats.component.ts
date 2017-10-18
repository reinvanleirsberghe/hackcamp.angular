import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Movie} from '../../shared/types';

@Component({
  selector: 'hf-stats',
  templateUrl: './stats.component.html',
})
export class StatsComponent implements OnInit {
  step1: Observable<Movie[]>;
  step2: Observable<Movie[]>;
  step3: Observable<number>;
  step4: Observable<number>;
  step5: Observable<number>;
  step6: Observable<Movie[]>;

  constructor() {
  }

  /**
   * DEBUG with .do operator
   */

  ngOnInit() {
    /**
     * Uncomment to launch
     */
    // this.step1 = this.doStep1();
    // this.step2 = this.doStep2();
    // this.step3 = this.doStep3();
    // this.step4 = this.doStep4();
    // this.step5 = this.doStep5(this.step3, this.step4);
    // this.step6 = this.doStep6();
  }

  doStep1(): Observable<Movie[]> {
    /**
     * Get 3 first movies that have the vote_average > 7
     */
    throw new Error('Not implemented :p')
  }

  doStep2(): Observable<Movie[]> {
    /**
     * Complete to get 3 first movies that have the vote_average > 7
     */
    throw new Error('Not implemented :p')
  }

  doStep3(): Observable<number> {
    /**
     * Complete to calculate the sum of vote_average for all movies
     */
    throw new Error('Not implemented :p')
  }

  doStep4(): Observable<number> {
    /**
     * Complete to number of movies without using .scan
     *
     * NB: Did you find the difference between .scan and the new operator ?
     */
    throw new Error('Not implemented :p')
  }

  doStep5(sumOfCodeAverage: Observable<number>, countMovies: Observable<number>): Observable<number> {
    /**
     * Using sumOfCodeAverage and countMovies Observables, implement the observable
     * to calculate the average of code_average for all movies
     */
    throw new Error('Not implemented :p')
  }

  doStep6(): Observable<Movie[]> {
    /**
     * Skip the 10 first movies, then group these movies by popularity >= 15 and take only the first one
     */
    throw new Error('Not implemented :p')
  }

  /**
   * Add a step where you get all movies,
   * Then for each movie, you populate the genre_ids
   * i.e for the given movie :
   * {
   *  id:100
   *  genre_ids:[2,3]
   *  //... others property
   * }
   * We will perform a Http call to the backend to get the genres details
   * - /genres/2
   * - /genres/3
   *
   * When your have the genre details array, you create a new object with the shape:
   * {
   *  titleMovie
   *  genresPopulated:[genres]
   * }
   * Then you display it
   */

  /**
   * Rewrite the previous step where you get all movies and genres
   * Then you perform the same mapping
   */

  back() {
    throw new Error('Not implemented :p')
  }
}
