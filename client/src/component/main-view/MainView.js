import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Route, BrowserRouter, Switch,Redirect} from 'react-router-dom';
import MovieCard from '../movie-card/MovieCard';
import MovieView from '../movie-view/MovieView';
import Header from '../UI/Header';
import Footer from '../UI/Footer';
import Login from '../login/Login';
import Registration from '../registration/Registration';
import fetchMovies from '../../actions/fetchMovies';
import { getFavorite } from '../../actions/favorite';
import { setUser } from '../../actions/session';
import User from '../user/User';
import './MainView.scss'

class MainView extends Component {
 
  componentDidMount() {
    const {user} = this.props
    let id;
    user ? id = user._id : id = null;
    this.props.fetchMovies()
    .then()
    //this.props.getFavorite(id)
  }


  render() {

    const {movies, user} = this.props;
    console.log('%c User','color:blue; font-size:16px; font-weight:bold');
     console.log(this.props.user);
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
            <Route path='/user' component={User} />
          </Switch>
          </div>
          <Footer />
        </main>
      </BrowserRouter>
    )
  }
}

export default connect(({movies, user, favorites}) => ({movies, user, favorites}),
                      {fetchMovies, getFavorite})(MainView);