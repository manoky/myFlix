import React from 'react';
import Card from './Card';
import './MovieCard.scss';

const MovieCard = ({movies, getMovie}) => {
  return(
    <div className="MovieCard">
      { 
        movies.map(movie => (
          <Card 
            key={movie._id}
            movie={movie}
            getMovie={getMovie}
          />
        ))
      }
    </div>
  )
}

export default MovieCard;