import React, {Component} from 'react';
import axios from 'axios';
import { Route, BrowserRouter, Switch,Redirect} from 'react-router-dom';
import MovieCard from '../movie-card/MovieCard';
import MovieView from '../movie-view/MovieView';
import './MainView.scss'

class MainView extends Component {
  state = {
    movies:[],
    selectedMovie: null,
    user: null,
    loading: true
  }

  isMouted = false;

  componentDidMount() {
    this.isMouted = true;
    this.getMovies()
  }

  componentWillUnmount(){
    this.isMouted = false;
   
  }

  getMovies = () => {
    axios.get('/api/v1/movies')
    .then(resp => {
      const movies = resp.data
      if(this.isMouted) {
        this.setState({movies})
      }
    })
    .catch(err => console.log(err))
  }


  logUserIn =(info)=> {
    this.setState({user:info.Username});
    localStorage.setItem('user',info.Username);
    localStorage.setItem('token',info.token);
  }


  render() {
    const {movies, selectedMovie} = this.state;
    console.log('%c Movie','color:blue; font-size:16px; font-weight:bold');
    console.log(movies,'Selected: ', selectedMovie)
    return (
      <BrowserRouter>
        <main className="MainView">
          <Switch>
            <Route exact path='/' render={() => 
              <MovieCard
                movies={movies}
                getMovie={this.onGetMovie} 
              />}
            />
            <Route exact path='/movies/:id' 
              component={MovieView}
            />
          </Switch>
        </main>
      </BrowserRouter>
    )
  }
}

export default MainView;