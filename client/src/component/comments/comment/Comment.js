import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactStars from 'react-stars';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';
import './Comment.scss';



const Comment = ({comment}) => {
  const {comment_body, rating} = comment;

  return (
    <div className="Comment">
      <Card className="card">
      <CardHeader
        avatar={
          <Avatar aria-label="Recipe" className="avatar">
            M
          </Avatar>
        }
        title={comment.username}
        subheader={moment(comment.createdAt).fromNow()}
      />
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

Comment.propTypes = {
  comment: PropTypes.object,
}

export default Comment;