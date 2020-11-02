import { Action, ActionTypes, TvShow } from '../actions';
import { LIMIT_MOVIES_COUNT } from '../constants';

export interface TvShowsState {
  tvShows: TvShow[];
  tvShowDetails: TvShow | null;
  getTvShowDetailsInProgress: boolean;
  getTvShowsInProgress: boolean;
}

const INITIAL_STATE = {
  tvShows: [],
  tvShowDetails: null,
  getTvShowDetailsInProgress: false,
  getTvShowsInProgress: false,
};

export const tvShowsReducer = (
  state: TvShowsState = INITIAL_STATE,
  action: Action
) => {
  switch (action.type) {
    case ActionTypes.getTvShows:
      return {
        ...state,
        tvShows: action.payload.slice(0, LIMIT_MOVIES_COUNT),
      };

    case ActionTypes.getTvShowDetails:
      return {
        ...state,
        tvShowDetails: action.payload,
      };

    case ActionTypes.getTvShowDetailsInProgress:
      return {
        ...state,
        getTvShowDetailsInProgress: action.payload,
      };
      
    case ActionTypes.getTvShowsBySearchTerm:
      return { ...state, tvShows: action.payload };
      
    case ActionTypes.getTvShowsInProgress:
      return { 
        ...state,
        getTvShowsInProgress: action.payload,
      };
      
    default:
      return state;
  }
};
