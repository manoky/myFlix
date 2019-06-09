import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import ReactStars from 'react-stars';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderOutlined from '@material-ui/icons/FavoriteBorderOutlined';
import {onFavorite, unFavorite} from '../../actions/favorite';
import {showModal} from '../../actions/modal';
import './MCard.scss';




const MCard = ({
  movie, 
  user, 
  comments, 
  onFavorite, 
  favorites,
  unFavorite,
  showModal,
  }) => {


  const {_id,Title,Genre, ImagePath} = movie

  
  let userId = null;
  user !== null ? userId = user._id : null;
	
	//Calculates average rating from comments rating
	let rating = [];
	comments.map(com => {
		com.movie_id === _id ? rating.push(com.rating) : null;
	});
	const avRating = rating.reduce((sum, num) => sum + num,0) / rating.length;
	movie['rating'] = avRating;
	//assigns movie rating to average rating 

 
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
      <Card className="card-grid">
        <Link to={`/movies/${_id}`} className="title">
          <CardActionArea>
            <img src={ImagePath} alt={Title} className="card-grid-img"/>
            <CardContent className="movie-title">
              <Typography gutterBottom variant="caption" component="h2">
              {Title} 
              </Typography>
            </CardContent>
          </CardActionArea>
        </Link>
        <Link to={`/genres/${Genre.Name}`} className="title">
          <span className="genre">
            {Genre.Name}
          </span>
        </Link>
        <CardActions>
          <IconButton size="small" color="primary" onClick={() => user ? toggleFavorite(userId, _id) : showModal()} >
            {
              favorites.includes(_id) ? 
                <FavoriteIcon className="heart" />
                : 
                <FavoriteBorderOutlined className="heart" /> 
            }
          </IconButton>
          
          {
            movie.rating > 1 ?
            <Button size="small" color="primary">
            <ReactStars 
              count={5}
              size={20}
              color2={'#ffd700'}
              edit={false}
              value={parseFloat(avRating)}
            /> 
              </Button>
            : null
          }
          
        </CardActions>
      </Card>
    </div>
  )
}

Card.propTyoes = {
  movie: PropTypes.object,
  favorites: PropTypes.array,
  comments: PropTypes.array,
  unFavorite: PropTypes.func,
	unFavorite: PropTypes.func,
  user: PropTypes.object,
  showModal: PropTypes.func,
}

export default connect(({favorites, user, comments}) => ({favorites, user, comments}),
                       {onFavorite, unFavorite, showModal})(MCard);