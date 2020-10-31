import { GetHandleChangeAction, GetHandleTabViewAction } from './main';
import {
  GetMoviesAction,
  GetMovieDetailsAction,
  GetMovieInProgressAction,
  GetMoviesBySearchTermAction,
} from './movies';
import {
  GetTvShowsAction,
  GetTvShowDetailsAction,
  GetTvShowInProgressAction,
  GetTvShowsBySearchTermAction,
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
  | GetTvShowsBySearchTermAction;
