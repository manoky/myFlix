import React from 'react';
import Card from './Card';
import './MovieCard.scss';

const MovieCard = ({movies}) => {
  return(
    <div className="MovieCard">
      { 
        movies.map(movie => (
          <Card 
            key={movie._id}
            movie={movie}
          />
        ))
      }
    </div>
  )
}

export default MovieCard;