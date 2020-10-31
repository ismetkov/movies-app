import React from 'react';
import { Router } from '@reach/router';

import Movies from '../pages/movies';
import MovieDetails from '../pages/movie-details';
import TvShowDetails from '../pages/tv-show-details';

export function App() {
  return (
    <Router>
      <Movies default path="/" />
      <Movies path="/movies" />
      <MovieDetails path="movies/:id" />
      <TvShowDetails path="tv-shows/:id" />
    </Router>
  );
}
