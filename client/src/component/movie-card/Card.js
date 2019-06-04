import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import ReactStars from 'react-stars';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { MdFavorite,MdFavoriteBorder } from 'react-icons/lib/md';
import {onFavorite} from '../../actions/favorite';

const Card = ({movie, isMovieView, user, rating, onFavorite}) => {
  const {_id,Title,Genre,Director, ImagePath,Description} = movie

  const [isFavorite, setIsFavorite] = useState(false);

  // const onFavorited = (id) => {
  //   setIsFavorite(!isFavorite);
  // }
  console.log('Movie View',_id)

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
              <Link to={`/movies/${_id}`} onClick={() => getMovie(`${_id}`)}>
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
            <span className="heart hint--top" onClick={() => onFavorite(user._id,_id)}>
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

export default connect(({favorite, user}) => ({favorite, user}), {onFavorite})(Card);