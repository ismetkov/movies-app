import { combineReducers } from 'redux';

import { moviesReducer } from './movies';
import { tvShowsReducer } from './tv-shows';

import { MoviesState } from './movies';
import { TvShowsState } from './tv-shows';
import { Action, ActionTypes } from '../actions';

interface AppState {
  searchTerm: string;
  tabView: string;
}

export interface StoreState {
  movies: MoviesState;
  tvShows: TvShowsState;
  main: AppState;
}

const INITIAL_STATE = {
  searchTerm: '',
  tabView: 'tv',
};

const mainReducer = (state: AppState = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case ActionTypes.handeSearchTermChange:
      return { ...state, searchTerm: action.payload };

    case ActionTypes.handeSetTabView:
      return { ...state, tabView: action.payload };

    default:
      return state;
  }
};

export const reducers = combineReducers<StoreState>({
  main: mainReducer,
  movies: moviesReducer,
  tvShows: tvShowsReducer,
});
