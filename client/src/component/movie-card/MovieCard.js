import React from 'react';
import './MovieCard.scss';

const MovieCard = ({movie}) => {
  const {_id,Title,Genre,Director,Trailer, ImagePath,Description} = movie
  console.log('%c MovieList','color:blue; font-size:16px; font-weight:bold');
  console.log('movie',movie)

  return(
    <div className="MovieCard">
      <div className="Inner-Card">
        <div className="movie-image">
          <img src={ImagePath} alt={Title}/>
        </div>
        <div className="movie-details">
          <div><h1>{Title}</h1></div>
          <div>{Genre.Name}</div>
          <div>{Director.Name}</div>
          <div>{Description}</div>
          <hr />
        </div>
      </div>
      <embed width="100%" height="450" src={Trailer} />
    </div>
  )
 
}

export default MovieCard;