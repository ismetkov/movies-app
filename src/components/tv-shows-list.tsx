import React from 'react';

import { TvShow } from '../actions';

import { POSTER_URL } from '../constants';

import TvShowCard from './common/card';

import { List } from './styles/movies';
import { LoaderText } from './styles/details-movie';

interface TVShowsListProps {
  tvShows: TvShow[];
  getTvShowsInProgress: boolean;
}

export function TVShowsList({ tvShows, getTvShowsInProgress }: TVShowsListProps) {
  if (getTvShowsInProgress) {
    return <LoaderText>Loading...</LoaderText>
  }

  return (
    <List>
      {tvShows.map(tvShow => (
        <TvShowCard
          key={tvShow.id}
          title={tvShow.name}
          description={tvShow.overview}
          image={`${POSTER_URL}${tvShow.poster_path}`}
          linkTo={`/tv-shows/${tvShow.id}`}
        />
      ))}
    </List>
  );
}
