export class Category {
  category: string;
  selected: boolean;
}

export class Genre {
  id: number;
  name: string;
}

export class Movie {
  id: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
  title: string;
  popularity: number;
  poster_path: string;
  original_language: string;
  original_title: string;
  genre_ids: number[];
  backdrop_path: string;
  adult: boolean;
  overview: string;
  release_date: string;
}

