import React,{ Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import Card from './Card';
import Comments from '../comments/Comments';
import Sidebar from '../UI/sidebar/Sidebar';
import { getRatings } from '../../actions/comments';
import './MovieView.scss'


class MovieView extends Component {
  state = {
    movie: null,
    movieComments: [],
  }
  
  isMovieView = true;
  
  componentDidMount() {
    const {id} = this.props.match.params;
    this.onGetMovie(id);
    //this.onGetComments(id);
  }

  onGetMovie = (id) => {
    axios.get(`/api/v1/movies/${id}`)
    .then(resp => {
      const movie = resp.data
      this.setState({movie})
    })
    .catch(err => console.log(err));
  }

  // onGetComments =(id)=> {
  //   axios.get(`/api/v1/comments/${id}`)
  //   .then(res => {
  //     const comments =res.data
  //     this.setState({comments})
  //   })
  //   .catch(err => console.log(err))
  // }

  onComment = (
                userId,
                username,
                movie_id, 
                rating,
                comment_body
               ) =>{
    axios.post('/api/v1/comments',{
      userId: userId,
      username: username,
      movieId: movie_id,
      rating: rating,
      comment: comment_body
    })
    .then(res => {
      this.setState(prevState =>({
        comments: [...prevState.comments, res.data]
      }));
    })
    .catch(err => console.log(err));
    
  }
  

  render() {
    const { movie} = this.state;
    const {user, comments} = this.props;
    const m_id = this.props.match.params.id

    const filteredComments = comments.filter(comment => comment.movie_id === m_id)
   
    return (
      <div className="MovieView">
        <Sidebar />
        <div className='Inner-View'>
        { movie !== null ?
            <Card movie={movie} 
              isMovieView={this.isMovieView}
            />
          : null
        }
        {
          movie !==null ? 
          <Comments 
            comments={filteredComments} 
            user={user} 
            movieId={movie._id}
            sendComment={this.onComment}
          /> :
          null
        }
        
        </div>
      </div>
    )
  }

}

export default connect(({comments}) => ({comments}))(MovieView);