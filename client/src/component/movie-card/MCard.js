import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import ReactStars from 'react-stars';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {onFavorite, unFavorite} from '../../actions/favorite';
import './MCard.scss';



import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderOutlined from '@material-ui/icons/FavoriteBorderOutlined';




const MCard = ({
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
      <Card className="card-grid">
        <Link to={`/movies/${_id}`} className="title">
          <CardActionArea>
            <img src={ImagePath} alt={Title} className="card-grid-img"/>
            <CardContent>
              <Typography gutterBottom variant="caption" component="h2">
              {Title} 
              </Typography>
            </CardContent>
          </CardActionArea>
        </Link>
        <CardActions>
          <IconButton size="small" color="primary" onClick={() => toggleFavorite(userId, _id)} >
            {
              favorites.includes(_id) ? 
                <FavoriteIcon className="heart" />
                : 
                <FavoriteBorderOutlined className="heart"/> 
            }
          </IconButton>
          <Button size="small" color="primary">
            <ReactStars 
              count={5}
              size={20}
              color2={'#ffd700'}
              edit={false}
              value={parseFloat(rating)}
            />
          </Button>
            {Genre.Name}
        </CardActions>
      </Card>
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
                       {onFavorite, unFavorite})(MCard);