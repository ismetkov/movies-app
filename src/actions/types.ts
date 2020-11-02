import { GetHandleChangeAction, GetHandleTabViewAction } from './main';
import {
  GetMoviesAction,
  GetMovieDetailsAction,
  GetMovieInProgressAction,
  GetMoviesBySearchTermAction,
  GetMoviesInProgressAction
} from './movies';
import {
  GetTvShowsAction,
  GetTvShowDetailsAction,
  GetTvShowInProgressAction,
  GetTvShowsBySearchTermAction,
  GetTvShowsInProgressAction,
} from './tv-shows';

export enum ActionTypes {
  getMovies,
  getMovieDetails,
  getMovieDetailsInProgress,
  getTvShows,
  getTvShowDetails,
  getTvShowDetailsInProgress,
  handeSearchTermChange,
  handeSetTabView,
  getMoviesBySearchTerm,
  getTvShowsBySearchTerm,
  getTvShowsInProgress,
  getMoviesInProgress,
}

export type Action =
  | GetHandleChangeAction
  | GetHandleTabViewAction
  | GetMoviesAction
  | GetMovieDetailsAction
  | GetMovieInProgressAction
  | GetTvShowsAction
  | GetTvShowDetailsAction
  | GetTvShowInProgressAction
  | GetMoviesBySearchTermAction
  | GetTvShowsBySearchTermAction
  | GetTvShowsInProgressAction
  | GetMoviesInProgressAction;
