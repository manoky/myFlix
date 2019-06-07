import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import ReactStars from 'react-stars';
import Button from '@material-ui/core/Button';
import {connect} from 'react-redux';
import {showModal, hideModal } from '../../../actions/modal';
import './CommentForm.scss';




const CommentForm = ({activeUser, movieId, sendComment, showModal}) => {

  let [comment_body, setComment_body] = useState('');
  let [rating, setRating] = useState(1);
  let [userId, setUserId] = useState('');
  let [username, setUser_name] = useState('');
  let [movie_id, setMovie_id] = useState('');
  
  useEffect(() => {
    if(activeUser !== null && activeUser !== undefined) {
      setUserId(activeUser._id)
      setUser_name(activeUser.Username)
    }
    setMovie_id(movieId);
  })

  const onSubmit=(e)=> {
    e.preventDefault();
    if(comment_body === '') {
      return;
    }
    sendComment(userId, username, movie_id, rating, comment_body);
    setComment_body('');
  }

  const ratingChanged = (newRating) => {
    setRating(newRating);
  }

  return(
    <form className='CommentForm' onSubmit={onSubmit}>
      <div className="form-stars">
        <ReactStars 
          count={5}
          size={24}
          color2={'#ffd700'}
          value={rating}
          onChange={ratingChanged}
        />
      </div>
      <div className="form-body">
        <textarea 
          onChange={e => setComment_body(e.target.value)}
          value={comment_body}
          onFocus={ activeUser ? null : showModal}
          onClick={ activeUser ? null : showModal}
        />
      </div>
        <Button variant="contained" size="small" type="submit" >
            Submit
        </Button>
    </form>
  );
}

CommentForm.propTypes = {
  activeUser: PropTypes.object,
  showModal: PropTypes.func,
}

export default connect(null,{showModal})(CommentForm);