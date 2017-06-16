import {Component} from '@angular/core';
import {Category, Movie} from './types';
import {getGenreId, movieContainsGenre} from './utils';
import {PICTURES_CDN_URL} from './constant';
import {movies} from './mocks/movies';
import {categories} from './mocks/categories';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css',
    '../assets/css/header.css',
    '../assets/css/movie.css',
  ]
})
export class AppComponent {

  logo = '../assets/images/logo.svg';

  PICTURES_CDN_URL = PICTURES_CDN_URL;

  movies: Movie[] = movies.slice(0, 50);
  filteredMovies: Movie[] = movies.slice(0, 50);
  categories: Category[] = categories;
  searchValue: string;
  navClosed = true;
  hoverMovies = new Map();


  selectTab(category) {
    this.categories = this.categories.map(filter => {
      filter.selected = filter.category === category;
      return filter;
    });
    this.filterMovies();
  };

  closeSideBar() {
    this.navClosed = true;
  };

  openSideBar() {
    this.navClosed = false;
  }

  search(event) {
    this.searchValue = event.target.value;
    this.filterMovies();
  };

  filterMovies() {
    const selectedCategory = this.categories.filter(f => f.selected)[0]
      .category;

    this.filteredMovies = this.movies
      .filter(this.filterByCategory(selectedCategory))
      .filter(this.filterByTitle(this.searchValue));
  }

  filterByCategory(selectedCategory: string) {
    return (movie: Movie) => {
      return selectedCategory === 'All' || movieContainsGenre(movie, getGenreId(selectedCategory));
    }
  }

  filterByTitle(title: string) {
    return (movie: Movie) => {
      return !title || movie.title.toLowerCase().includes(title.toLowerCase());
    }
  }

  toggleHoverForTheMovie(movieId: number) {
    this.hoverMovies.set(movieId, !this.hoverMovies.get(movieId));
  }

  isMovieHovered(movieId: number) {
    return this.hoverMovies.get(movieId);
  }

  shorten(text: string, limit: number) {
    return text.split('').slice(0, limit).join('') + '...';
  }
}

