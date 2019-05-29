import React,{ Component } from 'react';
import axios from 'axios';
import Card from '../movie-card/Card';
import './MovieView.scss'

class MovieView extends Component {
  state= {
    movie: null,
    favorited: false,
  }

  isMovieView = true;
  
  componentDidMount() {
    const {id} = this.props.match.params;
    this.onGetMovie(id);
  }

  onGetMovie = (id) => {
    axios.get(`/api/v1/movies/${id}`)
    .then(resp => {
      const movie = resp.data
      this.setState({movie})
    })
    .catch(err => console.log(err));
  }

  onFavorite = () => {
    console.log('Clicked')
    this.setState({favorited:!this.state.favorited})
  }

  render() {
    const {movie, favorited} = this.state;
    return (
      <div className="MovieView">
        { movie !== null ?
            <Card movie={movie} 
              isMovieView={this.isMovieView}
              favorite={this.onFavorite}
              isFavorite={favorited}
             />
          : null
        }
        <h1>Comments Placeholder</h1>
      </div>
    )
  }

}

export default MovieView;