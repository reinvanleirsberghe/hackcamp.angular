import {Component, Inject, OnInit} from '@angular/core';
import {Category, Genre, Movie} from '../../shared/types';
import {ApiService} from '../core/api.service';
import {PICTURES_CDN_URL_TOKEN} from '../di';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toArray';
import 'rxjs/add/observable/from';

@Component({
  selector: 'hf-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  categories: Category[];
  genres: Genre[];

  searchValue: string;
  navClosed = true;

  movies$: Observable<Movie[]>;
  filteredMovies$: Observable<Movie[]>;

  constructor(private apiService: ApiService,
              @Inject(PICTURES_CDN_URL_TOKEN) public pictureCdnUrl: string) {
    this.selectTab = this.selectTab.bind(this);
  }

  ngOnInit(): void {
    /**
     * Due to the changes in the api response (i.e Observable),
     * we have to refractor the code to make it working again :)
     *
     */
    this.movies$ = this.apiService.getOnlyMovies(50);
    this.filteredMovies$ = this.movies$;

    this.apiService.getCategories()
      .subscribe((categories: Category[]) => this.categories = categories);
    this.apiService.getGenres()
      .subscribe((genres: Genre[]) => this.genres = genres);
  }

  selectTab(category): void {
    this.categories = this.categories.map(filter => {
      filter.selected = filter.category === category;
      return filter;
    });
    this.filterMovies();
  };

  closeSideBar(): void {
    this.navClosed = true;
  };

  openSideBar(): void {
    this.navClosed = false;
  }

  search(value: string): void {
    this.searchValue = value;
    this.filterMovies();
  };

  filterMovies(): void {
    const selectedCategory = this.categories.filter(f => f.selected)[0]
      .category;
    /**
     * Perform an implementation of the movies filtering using Observable
     * @type {"../../Observable".Observable<T>}
     */
    this.filteredMovies$ = this.movies$
      .map((movies: Movie[]) =>
        movies
          .filter(this.filterByCategory(selectedCategory))
          .filter(this.filterByTitle(this.searchValue)));

    /**
     * Try to rewrite the previous implementation using .switchMap and .from
     * @type {"../../Observable".Observable<T>}
     */
    // this.filteredMovies$ = this.movies$
    //   .switchMap((movies: Movie[]) => Observable.from(movies))
    //   .filter(this.filterByCategory(selectedCategory))
    //   .filter(this.filterByTitle(this.searchValue))
    //   .scan((acc, next) => [...acc, next], []);
  }

  filterByCategory(selectedCategory: string) {
    return (movie: Movie) => {
      return selectedCategory === 'All' || this.movieContainsGenre(movie, this.getGenreId(selectedCategory));
    }
  }

  filterByTitle(title: string) {
    return (movie: Movie) => {
      return !title || movie.title.toLowerCase().includes(title.toLowerCase());
    }
  }

  movieContainsGenre(movie: Movie, genre_id: number): boolean {
    return movie.genre_ids.reduce((contains, next) => {
      return contains ? contains : next === genre_id
    }, false);
  }

  getGenreId(name: string): number {
    const { id } = this.genres.filter(genre => genre.name === name)[0];
    return id;
  }

}
