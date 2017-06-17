import {Component} from '@angular/core';
import {Category, Genre, Movie} from '../shared/types';
import {PICTURES_CDN_URL} from '../shared/constant';
import {movies} from '../shared/mocks/movies';
import {categories} from '../shared/mocks/categories';
import {genres} from '../shared/mocks/genres';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css',
    '../../assets/css/header.css',
    '../assets/css/movie.css',
  ]
})
export class AppComponent {
  PICTURES_CDN_URL = PICTURES_CDN_URL;

  logo = '../assets/images/logo.svg';

  movies: Movie[] = movies.slice(0, 50);
  filteredMovies: Movie[] = movies.slice(0, 50);
  categories: Category[] = categories;
  genres: Genre[] = genres;

  searchValue: string;
  navClosed = true;
  hoverMovies = new Map();


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

  search(event): void {
    this.searchValue = event.target.value;
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

  toggleHoverForTheMovie(movieId: number): void {
    this.hoverMovies.set(movieId, !this.hoverMovies.get(movieId));
  }

  isMovieHovered(movieId: number): boolean {
    return this.hoverMovies.get(movieId);
  }

  shorten(text: string, limit: number): string {
    return text.split('').slice(0, limit).join('') + '...';
  }
}

