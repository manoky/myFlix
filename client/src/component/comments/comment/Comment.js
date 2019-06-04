import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactStars from 'react-stars';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import './Comment.scss';



const Comment = ({comment, username}) => {
  const {comment_body, rating} = comment;

  return (
    <div className="Comment">
      {/* <div>User: {username}</div>
      <div>
        <ReactStars 
          count={5}
          size={20}
          color2={'#ffd700'}
          edit={false}
          value={parseFloat(rating)}
        />
      </div>
      <div>{comment_body}</div> */}






      <Card className="card">
      <CardHeader
        avatar={
          <Avatar aria-label="Recipe" className="avatar">
            R
          </Avatar>
        }
        // action={
        //   <IconButton>
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      {/* <CardMedia
        className={styles.media}
        image="/static/images/cards/paella.jpg"
        title="Paella dish"
      /> */}
      <CardContent className="stars-card">
          <ReactStars 
            count={5}
            size={20}
            color2={'#ffd700'}
            edit={false}
            value={parseFloat(rating)}
            className="stars"
          />
      </CardContent>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {comment_body}
          
        </Typography>
      </CardContent>
    </Card>










      
    </div>
  )
}

export default Comment;