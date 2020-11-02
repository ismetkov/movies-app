import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps } from '@reach/router';

import { getMovieDetails } from '../actions';
import { StoreState } from '../reducers';
import { POSTER_URL } from '../constants';

import { InnerWrapper } from '../components/styles/global-style';
import { MovieDetailsHero, MovieDetailsTitle, MovieDetailsImage, GoBack, LoaderText } from '../components/styles/details-movie';

function MovieDetails({ id = '' }: RouteComponentProps<{ id: string }>) {
  const dispatch = useDispatch();
  const movieDetails = useSelector(
    (state: StoreState) => state.movies.movieDetails
  );
  const getMovieDetailsInProgress = useSelector(
    (state: StoreState) => state.movies.getMovieDetailsInProgress
  );

  useEffect((): void => {
    dispatch(getMovieDetails(Number(id)));
  }, [dispatch, id]);

  if (!movieDetails || getMovieDetailsInProgress) {
    return <LoaderText>Loading...</LoaderText>;
  }

  return (
    <div>
      <MovieDetailsHero>
        <MovieDetailsImage alt="" src={`${POSTER_URL}${movieDetails.poster_path}`} />
        <MovieDetailsTitle>{movieDetails.title}</MovieDetailsTitle>
      </MovieDetailsHero>
      <InnerWrapper>
        <GoBack to={'/'}>Back</GoBack>
        <p>{movieDetails.overview}</p>
      </InnerWrapper>
    </div>
  );
}

export default MovieDetails;
