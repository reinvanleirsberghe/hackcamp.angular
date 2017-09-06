import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Category, Genre, Movie} from '../shared/types';
import {PICTURES_CDN_URL} from '../shared/constant';
import {ApiService} from './api.service';

@Component({
  selector: 'hf-app',
  templateUrl: './app.component.html',
  styleUrls: [
    '../../assets/css/header.css',
    '../../assets/css/movie.css',
    '../../assets/css/movieComments.css',
    '../../assets/css/movieCommentForm.css',
  ],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  PICTURES_CDN_URL = PICTURES_CDN_URL;

  logo = '../assets/images/hackflix_logo.svg';

  categories: Category[];
  genres: Genre[];

  searchValue: string;
  navClosed = true;

  movies: Movie[];
  filteredMovies: Movie[];

  constructor(private apiService: ApiService) {
    this.selectTab = this.selectTab.bind(this);
  }

  ngOnInit(): void {
    this.movies = this.apiService.getMovies();
    this.filteredMovies = this.movies;
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

    this.filteredMovies = this.movies
      .filter(this.filterByCategory(selectedCategory))
      .filter(this.filterByTitle(this.searchValue));
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

