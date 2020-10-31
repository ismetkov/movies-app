import React from 'react';

import { Movie } from '../actions';

import { List } from './styles/movies';
import { POSTER_URL } from '../constants';
import MovieCard from './common/card';

interface MoviesListProps {
  movies: Movie[];
}

export function MoviesList({ movies }: MoviesListProps) {
  return (
    <List>
      {movies.map(movie => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          description={movie.overview}
          image={`${POSTER_URL}${movie.poster_path}`}
          linkTo={`/movies/${movie.id}`}
        />
      ))}
    </List>
  );
}
