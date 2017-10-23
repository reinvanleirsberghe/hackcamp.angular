import { Component, ViewEncapsulation } from "@angular/core";
import { Category, Genre, Movie } from "../shared/types";
import { PICTURES_CDN_URL } from "../shared/constant";
import { movies } from "../shared/mocks/movies";
import { categories } from "../shared/mocks/categories";
import { genres } from "../shared/mocks/genres";

@Component({
  selector: "hf-app",
  templateUrl: "./app.component.html",
  styleUrls: [
    "../../assets/css/header.css",
    "../../assets/css/movie.css",
    "../../assets/css/movieComments.css",
    "../../assets/css/movieCommentForm.css"
  ],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  PICTURES_CDN_URL = PICTURES_CDN_URL;

  logo = "../assets/images/hackflix_logo.svg";

  movies: Movie[] = movies.slice(0, 50);
  filteredMovies: Movie[] = movies.slice(0, 50);
  categories: Category[] = categories;
  genres: Genre[] = genres;

  searchValue: string;
  navClosed = true;
  hoverMovies = new Map();

  selectTab(category: string): void {
    this.categories = this.categories.map(filter => ({
      ...filter,
      selected: filter.category === category
    }));
    this.filterMovies(category);
  }

  closeSideBar(): void {
    this.navClosed = true;
  }

  openSideBar(): void {
    this.navClosed = false;
  }

  search(searchTerm: string): void {
    /**
     * Set searchValue and filter movies
     */
  }

  filterMovies(filterTerm: string): void {
    /**
     * Get the category selected and filter movies :
     * - by category
     * - by title
     */
  }

  toggleHoverForTheMovie(movieId: number): void {
    this.hoverMovies.set(movieId, !this.hoverMovies.get(movieId));
  }

  isMovieHovered(movieId: number): boolean {
    return this.hoverMovies.get(movieId);
  }
}
