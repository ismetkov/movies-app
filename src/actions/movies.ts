import axios from 'axios';
import { Dispatch } from 'redux';

import { BASE_URL, API_KEY } from '../constants';
import { ActionTypes } from './types';

export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
}

export interface GetMoviesAction {
  type: ActionTypes.getMovies;
  payload: Movie[];
}

export interface GetMovieDetailsAction {
  type: ActionTypes.getMovieDetails;
  payload: Movie;
}

export interface GetMovieInProgressAction {
  type: ActionTypes.getMovieDetailsInProgress;
  payload: boolean;
}

export interface GetMoviesBySearchTermAction {
  type: ActionTypes.getMoviesBySearchTerm;
  payload: Movie[];
}

export interface GetMoviesAction {
  type: ActionTypes.getMovies;
  payload: Movie[];
}

interface MoviesList {
  results: Movie[];
}

export interface GetMoviesInProgressAction {
  type: ActionTypes.getMoviesInProgress;
  payload: boolean;
}

export const getDetailsInProgress = (data: Boolean) => ({
  type: ActionTypes.getMovieDetailsInProgress,
  payload: data,
});

export const getMovies = () => {
  return async (dispatch: Dispatch) => {
    dispatch<GetMoviesInProgressAction>({
      type: ActionTypes.getMoviesInProgress,
      payload: true,
    });

    const res = await axios.get<MoviesList>(
      `${BASE_URL}/movie/top_rated?api_key=${API_KEY}`
    );

    dispatch<GetMoviesInProgressAction>({
      type: ActionTypes.getMoviesInProgress,
      payload: false,
    });

    dispatch<GetMoviesAction>({
      type: ActionTypes.getMovies,
      payload: res.data.results,
    });
  };
};

export const getMovieDetails = (id: number) => {
  return async (dispatch: Dispatch) => {
    dispatch<GetMovieInProgressAction>({
      type: ActionTypes.getMovieDetailsInProgress,
      payload: true,
    });

    const res = await axios.get<Movie>(
      `${BASE_URL}/movie/${id}?api_key=${API_KEY}`
    );

    dispatch<GetMovieDetailsAction>({
      type: ActionTypes.getMovieDetails,
      payload: res.data,
    });

    dispatch<GetMovieInProgressAction>({
      type: ActionTypes.getMovieDetailsInProgress,
      payload: false,
    });
  };
};

export const getMoviesBySearchTerm = (term: string) => {
  return async (dispatch: Dispatch) => {
    dispatch<GetMoviesInProgressAction>({
      type: ActionTypes.getMoviesInProgress,
      payload: true,
    });

    const res = await axios.get<MoviesList>(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${term}`
    );

    dispatch<GetMoviesBySearchTermAction>({
      type: ActionTypes.getMoviesBySearchTerm,
      payload: res.data.results,
    });

    dispatch<GetMoviesInProgressAction>({
      type: ActionTypes.getMoviesInProgress,
      payload: false,
    });
  };
};
