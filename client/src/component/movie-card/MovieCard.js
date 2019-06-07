import React from 'react';
import MCard from './MCard';
import MovieSlider from '../slider/MovieSlider';
import './MovieCard.scss';

const MovieCard = ({movies, rating, getRatings}) => {

  return(
    <div className="MovieCard">
      <div className="carousel">
        <MovieSlider />
      </div>
      <div className='Movie-List'>
        { 
          movies.map(movie => {
            return (
              <MCard 
                key={movie._id}
                movie={movie}
                rating={rating}
              />
            )
          })
        }
      </div>
    </div>
  )
}

export default MovieCard;