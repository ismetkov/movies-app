import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps } from '@reach/router';

import { getTvShowDetails } from '../actions';
import { StoreState } from '../reducers';
import { POSTER_URL } from '../constants';

import { InnerWrapper } from '../components/styles/global-style';

import { MovieDetailsHero, MovieDetailsTitle, MovieDetailsImage, GoBack, LoaderText } from '../components/styles/details-movie';

function TvShowDetails({ id = '' }: RouteComponentProps<{ id: string }>) {
  const dispatch = useDispatch();
  const tvShowDetails = useSelector(
    (state: StoreState) => state.tvShows.tvShowDetails
  );
  const getTvShowDetailsInProgress = useSelector(
    (state: StoreState) => state.tvShows.getTvShowDetailsInProgress
  );

  useEffect((): void => {
    dispatch(getTvShowDetails(Number(id)));
  }, [dispatch, id]);

  if (!tvShowDetails || getTvShowDetailsInProgress) {
    return <LoaderText>Loading....</LoaderText>;
  }

  return (
    <div>
      <MovieDetailsHero>
        <MovieDetailsImage alt="" src={`${POSTER_URL}${tvShowDetails.poster_path}`} />
        <MovieDetailsTitle>{tvShowDetails.name}</MovieDetailsTitle>
      </MovieDetailsHero>
      <InnerWrapper>
        <GoBack to={'/'}>Back</GoBack>
        <p>{tvShowDetails.overview}</p>
      </InnerWrapper>
    </div>
  );
}

export default TvShowDetails;
