import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import ReactStars from 'react-stars';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { MdFavorite,MdFavoriteBorder } from 'react-icons/lib/md';
import {onFavorite, unFavorite} from '../../actions/favorite';



const Card = ({
  movie, 
  isMovieView, 
  user, 
  rating, 
  onFavorite, 
  favorites,
  unFavorite
  }) => {

      
  const {_id,Title,Genre,Director, ImagePath,Description} = movie

  
  let userId = null;
  user !== null ? userId = user._id : null;

  console.log
 
  const toggleFavorite = (userId, movieId) => {
    const found = favorites.includes(movieId);
    if(userId !== null || userId !== undefined) {
      if(found) {
        unFavorite(userId, movieId)
      }else {
        onFavorite(userId, movieId)
      }
    }
  }

  return(
    <div className="Card">
      {isMovieView ? <embed width="100%" height="450" src={movie.Trailer} />: null}
      <div className="Inner-Card">
        <div className="movie-image">
          <img src={ImagePath} alt={Title}/>
        </div>
        <div className="movie-details">
          <div>
            {
              isMovieView ? <h1>{Title}</h1> 
              :
              <Link to={`/movies/${_id}`}>
                <h1>{Title}</h1>
              </Link>
            }
            
          </div>
          <div>{Description}</div>
          <div>
            <span>
              <ReactStars 
                count={5}
                size={20}
                color2={'#ffd700'}
                edit={false}
                value={parseFloat(rating)}
              />
            </span>&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="heart hint--top" onClick={() => toggleFavorite(userId, _id)}>
                {
                  favorites.includes(_id) ? 
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
            <span>Genre: {movie.Genre.Name}</span>&nbsp;&nbsp;&nbsp;&nbsp;
            <span>Director: {Director.Name}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

Card.propTyoes = {
  movie: PropTypes.object,
  favorite: PropTypes.func,
  rating: PropTypes.number,
  isFavorite: PropTypes.bool,
  isMovieView: PropTypes.bool,
}

export default connect(({favorites, user}) => ({favorites, user}),
                       {onFavorite, unFavorite})(Card);