import React,{ Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import Card from '../movie-card/Card';
import './MovieView.scss'
import Comments from '../comments/Comments';
import Sidebar from '../UI/sidebar/Sidebar';


class MovieView extends Component {
  state = {
    movie: null,
    favorited: false,
    comments: [],
    rating: null,
  }
  
  isMovieView = true;
  
  componentDidMount() {
    const {id} = this.props.match.params;
    this.onGetMovie(id);
    this.onGetComments(id);
  }

  onGetMovie = (id) => {
    axios.get(`/api/v1/movies/${id}`)
    .then(resp => {
      const movie = resp.data
      this.setState({movie})
    })
    .catch(err => console.log(err));
  }

  onGetComments =(id)=> {
    axios.get(`/api/v1/comments/${id}`)
    .then(res => {
      const comments =res.data
      this.setState({comments})
    })
    .catch(err => console.log(err))
  }

  onFavorite = () => {
    console.log('Clicked')
    this.setState({favorited:!this.state.favorited})
  }

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
      }))
      console.log(res.data)
    })
    .catch(err => console.log(err))
    
  }

  render() {
    const { movie, favorited, comments} = this.state;
    const {user} = this.props;
    console.log('%c Sum','color:blue; font-size:16px; font-weight:bold');
    //Calculate average rating of each movie
    console.log(movie)
    let sum = [];
    for(let i = 0; i < comments.length; i++) {
      sum.push(comments[i].rating);
    }

    const rating = sum.reduce((all, num) => {
      return all + parseFloat(num);
    },0) / sum.length;

    //console.log(average);
    return (
      <div className="MovieView">
        <Sidebar />
        <div className='Inner-View'>
        { movie !== null ?
            <Card movie={movie} 
              isMovieView={this.isMovieView}
              favorite={this.onFavorite}
              isFavorite={favorited}
              rating={rating}
            />
          : null
        }
        {
          movie !==null ? 
          <Comments 
            comments={comments} 
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

export default MovieView;