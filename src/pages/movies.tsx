import React, { useEffect } from 'react';
import { RouteComponentProps } from '@reach/router';
import { useDispatch, useSelector } from 'react-redux';

import {
  getMovies,
  getMoviesBySearchTerm,
  getTvShowsBySearchTerm,
  getTvShows,
  handleSearchInputChange,
  handleSetTabView,
} from '../actions';
import { StoreState } from '../reducers';
import { PAGE_HOME_TABS, MIN_SEARCH_CHARACTERS_LENGTH } from '../constants';

import { InnerWrapper } from '../components/styles/global-style';

import { MoviesList } from '../components/movies-list';
import { TVShowsList } from '../components/tv-shows-list';
import SearchBar from '../components/search-bar';
import SiteHeader from '../components/site-header';

function Movies(_: RouteComponentProps) {
  const dispatch = useDispatch();
  const movies = useSelector((state: StoreState) => state.movies.movies);
  const tvShows = useSelector((state: StoreState) => state.tvShows.tvShows);
  const searchTermValue = useSelector(
    (state: StoreState) => state.main.searchTerm
  );
  const tabView = useSelector((state: StoreState) => state.main.tabView);
  const IS_MOVIES_TAB = tabView === PAGE_HOME_TABS.MOVIES;


  const getTvShowsInProgress = useSelector(
    (state: StoreState) => state.tvShows.getTvShowsInProgress
  );

  const getMoviesInProgress = useSelector(
    (state: StoreState) => state.movies.getMoviesInProgress
  );

  useEffect((): void => {
    if (!searchTermValue) {
      dispatch(IS_MOVIES_TAB ? getMovies() : getTvShows());
    }
  }, [IS_MOVIES_TAB, dispatch, searchTermValue]);

  useEffect(() => {
    if (searchTermValue.length >= MIN_SEARCH_CHARACTERS_LENGTH) {
      const delayDebounceFn = setTimeout(() => {
        dispatch(
          IS_MOVIES_TAB
            ? getMoviesBySearchTerm(searchTermValue)
            : getTvShowsBySearchTerm(searchTermValue)
        );
      }, 1000);

      return () => clearTimeout(delayDebounceFn);
    } else {
      if (
        searchTermValue &&
        searchTermValue.length < MIN_SEARCH_CHARACTERS_LENGTH
      ) {
        const delayDebounceFn = setTimeout(() => {
          dispatch(IS_MOVIES_TAB ? getMovies() : getTvShows());
        }, 1000);

        return () => clearTimeout(delayDebounceFn);
      }
    }
  }, [searchTermValue, dispatch, IS_MOVIES_TAB]);

  const onSearchInputChange = (term: string) => {
    dispatch(handleSearchInputChange(term));
  };

  const onClickSetTabView = (tab: string) => {
    const isMovieView = tab === PAGE_HOME_TABS.MOVIES;

    dispatch(
      handleSetTabView(isMovieView ? PAGE_HOME_TABS.MOVIES : PAGE_HOME_TABS.TV)
    );
  };

  return (
    <InnerWrapper>
      <SiteHeader onClickSetTabView={onClickSetTabView} />
      <SearchBar
        onSearchInputChange={onSearchInputChange}
        value={searchTermValue}
      />
      {IS_MOVIES_TAB ? (
        <MoviesList movies={movies} getMoviesInProgress={getMoviesInProgress} />
      ) : (
        <TVShowsList tvShows={tvShows} getTvShowsInProgress={getTvShowsInProgress} />
      )}
    </InnerWrapper>
  );
}

export default Movies;
