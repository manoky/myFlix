import React, {Component} from 'react';
import axios from 'axios';
import MovieCard from '../movie-card/MovieCard';
import MovieView from '../movie-view/MovieView';

class MainView extends Component {
  state = {
    movies:[],
    user: null,
  }

  componentDidMount() {
    this.getMovies()
  }

  getMovies = () => {
    axios.get('/api/v1/movies')
    .then(resp => {
      const movies = resp.data
      this.setState({movies})
    })
    .catch(err => console.log(err))
  }

  logUserIn =(info)=> {
    this.setState({user:info.Username});
    localStorage.setItem('user',info.Username);
    localStorage.setItem('token',info.token);
  }

  render() {
    const {movies} = this.state;
    console.log(movies)
    return (
      <div>
        <MovieView movies={movies} />
      </div>
    )
  }
}

export default MainView;