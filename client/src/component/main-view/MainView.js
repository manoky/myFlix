import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Route, BrowserRouter, Switch,Redirect} from 'react-router-dom';
import MovieCard from '../movie-card/MovieCard';
import MovieView from '../movie-view/MovieView';
import './MainView.scss'
import Header from '../UI/Header';
import Footer from '../UI/Footer';
import Login from '../login/Login';
import Registration from '../registration/Registration';
import fetchMovies from '../../actions/fetchMovies';
import { getFavorite } from '../../actions/favorite';

class MainView extends Component {
 

  componentDidMount() {
    const id = this.props.user.user._id
    this.props.fetchMovies();
    this.props.getFavorite(id)    
  }


  render() {

    const {movies, user} = this.props;
    // console.log('%c User','color:blue; font-size:16px; font-weight:bold');
     //console.log(this.props);
    return (
      <BrowserRouter>
        <main className="MainView">
          <Header />
          <div className="MainView-Inner">
          <Switch>
            <Redirect from="/home" to="/" />
            <Route exact path='/' render={() => 
              <MovieCard
                movies={movies}
              />}
            />
            <Route exact path='/movies/:id' 
              render={({match}) => <MovieView match={match} user={user} />}
            />
            <Route path='/login' render={({history}) => 
              { 
                if(user !== null) {
                  history.push('/')
                  return <MovieCard movies={movies}/>  
                }else {
                  return  <Login 
                            logUser={this.logUser}
                            history={history} 
                            user={user}
                          />
                }
                 
              }} 
            />
            <Route path='/signup' component={Registration} />
          </Switch>
          </div>
          <Footer />
        </main>
      </BrowserRouter>
    )
  }
}

export default connect(({movies, user}) => ({movies, user}),
                      {fetchMovies, getFavorite})(MainView);