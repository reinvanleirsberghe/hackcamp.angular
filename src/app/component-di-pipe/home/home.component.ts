import {Component, OnInit} from '@angular/core';
import {Category, Genre, Movie} from '../../shared/types';
import {Observable} from 'rxjs/Observable';


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

  constructor() {
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

    this.categories = this.apiService.getCategories();
    this.genres = this.apiService.getGenres();
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

    /**
     * Try to rewrite the previous implementation using .switchMap and .from
     * @type {"../../Observable".Observable<T>}
     */

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
