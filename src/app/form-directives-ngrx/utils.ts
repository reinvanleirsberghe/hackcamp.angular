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


/**
 * @public
 * @function deepFreeze
 * @description Deep freeze object.
 * @param {Object} object - Object to deep freeze.
 * @returns {Object} - Deep frozen object.
 */

export function deepFreeze(object) {
  if (object) {
    var property, propertyKey;
    object = Object.freeze(object);
    for (propertyKey in object) {
      if (object.hasOwnProperty(propertyKey)) {
        property = object[propertyKey];
        if (((typeof property !== 'object') || !(property instanceof Object)) || Object.isFrozen(property)) {
          continue;
        }
        deepFreeze(property);
      }
    }
  }
  return object;
}
