import axios from 'axios';
import { Dispatch } from 'redux';

import { BASE_URL, API_KEY } from '../constants';
import { ActionTypes } from './types';

export interface TvShow {
  id: number;
  name: string;
  poster_path: string;
  overview: string;
}

export interface GetTvShowsAction {
  type: ActionTypes.getTvShows;
  payload: TvShow[];
}

export interface GetTvShowInProgressAction {
  type: ActionTypes.getTvShowDetailsInProgress;
  payload: boolean;
}

export interface GetTvShowDetailsAction {
  type: ActionTypes.getTvShowDetails;
  payload: TvShow;
}

export interface GetTvShowInProgressAction {
  type: ActionTypes.getTvShowDetailsInProgress;
  payload: boolean;
}

export interface GetTvShowsBySearchTermAction {
  type: ActionTypes.getTvShowsBySearchTerm;
  payload: TvShow[];
}

interface TvShowsList {
  results: TvShow[];
}

export interface GetTvShowsInProgressAction {
  type: ActionTypes.getTvShowsInProgress;
  payload: boolean;
}

export const getTvShows = () => {
  return async (dispatch: Dispatch) => {
    dispatch<GetTvShowsInProgressAction>({
      type: ActionTypes.getTvShowsInProgress,
      payload: true,
    });

    const res = await axios.get<TvShowsList>(`${BASE_URL}/tv/popular?api_key=${API_KEY}`);

    dispatch<GetTvShowsAction>({
      type: ActionTypes.getTvShows,
      payload: res.data.results,
    });

    dispatch<GetTvShowsInProgressAction>({
      type: ActionTypes.getTvShowsInProgress,
      payload: false,
    });
  };
};

export const getTvShowDetails = (id: number) => {
  return async (dispatch: Dispatch) => {
    dispatch<GetTvShowInProgressAction>({
      type: ActionTypes.getTvShowDetailsInProgress,
      payload: true,
    });

    const res = await axios.get<TvShow>(
      `${BASE_URL}/tv/${id}?api_key=${API_KEY}`
    );

    dispatch<GetTvShowDetailsAction>({
      type: ActionTypes.getTvShowDetails,
      payload: res.data,
    });

    dispatch<GetTvShowInProgressAction>({
      type: ActionTypes.getTvShowDetailsInProgress,
      payload: false,
    });
  };
};

export const getTvShowsBySearchTerm = (term: string) => {
  return async (dispatch: Dispatch) => {
    dispatch<GetTvShowsInProgressAction>({
      type: ActionTypes.getTvShowsInProgress,
      payload: true,
    });

    const res = await axios.get<TvShowsList>(
      `${BASE_URL}/search/tv?api_key=${API_KEY}&query=${term}`
    );
    
    dispatch<GetTvShowsBySearchTermAction>({
      type: ActionTypes.getTvShowsBySearchTerm,
      payload: res.data.results,
    });

    dispatch<GetTvShowsInProgressAction>({
      type: ActionTypes.getTvShowsInProgress,
      payload: false,
    });
  };
};
