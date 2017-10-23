/** A few utility functions used accross the project **/
import { genres } from "./mocks/genres";
import { movies } from "./mocks/movies";
import { Movie, IFilterMovie } from "./types";

const All: string = "all";

export const getGenreName = (id: number): string =>
  genres
    .filter(genre => genre.id === id)
    .map(({ name }) => name)
    .join("");

export const getGenreId = (name: string): number =>
  parseInt(
    genres
      .filter(genre => genre.name === name)
      .map(({ id }) => id)
      .join(""),
    10
  );

export const movieContainsGenre = (movie: Movie, genre_id: number): boolean =>
  movie.genre_ids.reduce(
    (contains, next) => (contains ? contains : next === genre_id),
    false
  );

export const filterByCategory = (category: string): IFilterMovie => (
  movie: Movie
) =>
  category.toLowerCase() === All ||
  movieContainsGenre(movie, getGenreId(category));

export const filterByTitle = (title: string): IFilterMovie => (movie: Movie) =>
  !title || movie.title.toLowerCase().includes(title.toLowerCase());

export const filterMoviesByCat = (movies: Movie[], genre_id: number): Movie[] =>
  movies.filter(movie => movieContainsGenre(movie, genre_id));

export const shorten = (text: string, limit: number): string =>
  text
    .split("")
    .slice(0, limit)
    .join("") + "...";

export const getPopularFilters = () =>
  genres
    .map(({ id }) => id)
    .map(id => ({
      name: getGenreName(id),
      movies: filterMoviesByCat(movies, id)
    }))
    .sort((a, b) => b.movies.length - a.movies.length)
    .map(({ name }) => name)
    .map(category => ({
      category,
      selected: false
    }))
    .slice(0, 5)
    .reduce((genres, nextGenre) => [...genres, nextGenre], [
      { category: All, selected: true }
    ]);

/**
 * If only one parameter is passed, you'll get all the numbers from 0
 * to your number, your number excluded.
 * If two parameters are passed, you'll get all the numbers from n -> m
 * starting at n and excluding m
 */
export const range = (n: number = 0, m: number = 0): Array<number> =>
  new Array(m !== 0 ? m - n : n).fill(0).map((_, i) => (m !== 0 ? n + i : i));
