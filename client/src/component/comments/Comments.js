import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Comment from './comment/Comment';
import CommentForm from './comment-form/CommentForm';
import './Comments.scss';

class Comments extends Component {
  render() {
    const {comments, user, movieId, sendComment} =this.props;
    let activeUser;
    if(user !== null) {
      activeUser = user;
    }

    return (
      <div className='Comments'>
        <h1>Comments Here</h1>
        <CommentForm 
          activeUser={activeUser} 
          movieId={movieId}
          sendComment={sendComment}
        />
        <div className="comment-list">
          {
            comments.map(comment => {
              return(
              <Comment 
                key={comment._id} 
                comment={comment.movie_id === movieId ? comment : null} 
                username={comment.username}
              />
            )})
          }
        </div>
       
      </div>
    );
  }
}

export default Comments;

