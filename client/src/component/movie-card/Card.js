import React from 'react';
import {Link} from 'react-router-dom';
import { MdFavorite,MdFavoriteBorder } from 'react-icons/lib/md';

const Card = ({movie, isMovieView, favorite, isFavorite, getMovie}) => {
  const {_id,Title,Genre,Director,Trailer, ImagePath,Description} = movie
  // console.log('%c MovieList','color:blue; font-size:16px; font-weight:bold');
  // console.log('movie',movie)
  console.log(isFavorite,'Cards face')
  return(
    <div className="Card">
      {isMovieView ? <embed width="100%" height="450" src={movie.Trailer} />: null}
      <div className="Inner-Card">
        <div className="movie-image">
          <img src={ImagePath} alt={Title}/>
        </div>
        <div className="movie-details">
          <div>
            <Link to={`/movies/${_id}`} onClick={() => getMovie(`${_id}`)}>
              <h1>{Title}</h1>
            </Link>
          </div>
          <div>{Description}</div>
          <div>
            <span>Rating: Great</span>&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="heart hint--top" onClick={favorite}>
                {isFavorite ? 
                  <span className="heart hint--top" aria-label="Remove to favorites">
                    <MdFavorite />
                  </span> : 
                  <span className="heart hint--top" aria-label="Add to favorites">
                    <MdFavoriteBorder />
                  </span>
                }
              </span>
          </div>
          <div>
            <span>Genre: {Genre.Name}</span>&nbsp;&nbsp;&nbsp;&nbsp;
            <span>Director: {Director.Name}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card;