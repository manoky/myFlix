import React from 'react';
import {Link} from 'react-router-dom';

const Card = ({movie, getMovie}) => {
  const {_id,Title,Genre,Director,Trailer, ImagePath,Description} = movie
  // console.log('%c MovieList','color:blue; font-size:16px; font-weight:bold');
  // console.log('movie',movie)

  return(
    <div className="MovieCard">
      <div className="Inner-Card">
        <div className="movie-image">
          <img src={ImagePath} alt={Title}/>
        </div>
        <div className="movie-details">
          <div>
            <Link to={`/movies/${_id}`}>
              <h1>{Title}</h1>
            </Link>
            </div>
          <div>{Genre.Name}</div>
          <div>{Director.Name}</div>
          <div>{Description}</div>
          <hr />
        </div>
      </div>
    </div>
  )
}

export default Card;