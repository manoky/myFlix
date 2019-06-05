import React from 'react';
import MCard from './MCard';
import './MovieCard.scss';
import MovieSlider from '../slider/MovieSlider';

const MovieCard = ({movies}) => {
  return(
    <div className="MovieCard">
      <div className="carousel">
        <MovieSlider />
      </div>
      <div className='Movie-List'>
        { 
          movies.map(movie => (
            <MCard 
              key={movie._id}
              movie={movie}
            />
          ))
        }
      </div>
    </div>
  )
}

export default MovieCard;