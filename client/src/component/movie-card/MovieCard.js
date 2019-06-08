import React from 'react';
import MCard from './MCard';
import MovieSlider from '../slider/MovieSlider';
import PropTypes from 'prop-types';
import './MovieCard.scss';

const MovieCard = ({movies, rating}) => {

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
              />
            )
          })
        }
      </div>
    </div>
  )
}

MovieCard.propTypes = {
  movies: PropTypes.array,
}

export default MovieCard;