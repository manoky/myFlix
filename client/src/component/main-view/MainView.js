import React, {Component} from 'react';
import axios from 'axios';
import { Route, BrowserRouter, Switch,Redirect} from 'react-router-dom';
import MovieCard from '../movie-card/MovieCard';
import MovieView from '../movie-view/MovieView';
import './MainView.scss'
import Header from '../UI/Header';
import Footer from '../UI/Footer';
import Login from '../login/Login';
import Registration from '../registration/Registration';

class MainView extends Component {
  state = {
    movies:[],
    user: null,
    loading: true
  }

  isMouted = false;

  componentDidMount() {
    this.isMouted = true;
    this.getMovies()
    let user = localStorage.getItem('user');
    if(user) {
      let parsedUser = JSON.parse(user)
      this.setState({user: parsedUser})
    }
    console.log(user)
    
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


  logUser = (user) => {
    this.setState({user: user});
    localStorage.setItem('user',JSON.stringify(user));
  }


  render() {
    const {movies, user} = this.state;
    const {history} = this.props;
    console.log('%c User','color:blue; font-size:16px; font-weight:bold');
    console.log(user, 'History',history);
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
                console.log('%c Inner User','color:blue; font-size:16px; font-weight:bold');console.log(user);
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

export default MainView;