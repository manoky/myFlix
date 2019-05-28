import React from 'react';
import MovieCard from '../movie-card/MovieCard';
import './MovieView.scss'

const MovieView = ({movies}) => {
  return (
    <div className="MovieView">
      {
        movies.map(movie => (
          <MovieCard key={movie._id} movie={movie}/>
        ))
      }
    </div>
  )
}

export default MovieView;