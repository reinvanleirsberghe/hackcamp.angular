import {MovieLite} from './type';
import {Movie} from '../shared/types';

export const mapMovieToMovieLite = (baseUrlCDN: string) =>
  ({title, id, poster_path, overview}: Movie) => {
    const mLite = new MovieLite();
    mLite.id = id;
    mLite.title = title;
    mLite.posterFullPath = `${baseUrlCDN}${poster_path}`;
    mLite.overview = overview;
    return mLite;
  };
