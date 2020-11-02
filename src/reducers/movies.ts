import { Action, ActionTypes, Movie } from '../actions';
import { LIMIT_MOVIES_COUNT } from '../constants';

export interface MoviesState {
  movies: Movie[];
  movieDetails: Movie | null;
  getMovieDetailsInProgress: boolean;
  getMoviesInProgress: boolean;
}

const INITIAL_STATE = {
  movies: [],
  movieDetails: null,
  getMovieDetailsInProgress: false,
  getMoviesInProgress: false,
};

export const moviesReducer = (
  state: MoviesState = INITIAL_STATE,
  action: Action
) => {
  switch (action.type) {
    case ActionTypes.getMovies:
      return {
        ...state,
        movies: action.payload.slice(0, LIMIT_MOVIES_COUNT),
      };

    case ActionTypes.getMovieDetails:
      return {
        ...state,
        movieDetails: action.payload,
      };

    case ActionTypes.getMovieDetailsInProgress:
      return {
        ...state,
        getMovieDetailsInProgress: action.payload,
      };

    case ActionTypes.getMoviesBySearchTerm:
      return { ...state, movies: action.payload.slice(0, LIMIT_MOVIES_COUNT) };

    case ActionTypes.getMoviesInProgress:
      return { 
        ...state,
        getMoviesInProgress: action.payload,
      };

    default:
      return state;
  }
};
