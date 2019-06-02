import React from 'react';
import Card from './Card';
import './MovieCard.scss';
import Sidebar from '../UI/sidebar/Sidebar';

const MovieCard = ({movies}) => {
  return(
    <div className="MovieCard">
      <Sidebar />
      <div className='Movie-List'>
        { 
          movies.map(movie => (
            <Card 
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