import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {logout} from '../../actions/session';
import { resetFavorite } from '../../actions/favorite';
import PropTypes from 'prop-types';
import './Header.scss';


const Header = ({ logout, user, resetFavorite }) => {
  return (
    <div className="Header">
       <AppBar position="fixed" color="secondary">
        <Toolbar>
          <Typography variant="h6" className="title">
            <Link to='/'>MyFlix</Link>
          </Typography>
          {
            user ? 
                  <div> 
                    <Link to='/'>
                      <Button color="inherit">
                        Movies
                      </Button>
                    </Link>
                    <Link to='/' onClick={logout}>
                      <Button color="inherit" onClick={resetFavorite}>
                        Log Out
                      </Button>
                    </Link>
                    <Link to='/user'> 
                      <Button color="inherit">
                        My Account
                      </Button>
                    </Link>
                  </div>
                  :
                  <div>
                    <Link to='/'>
                      <Button color="inherit">
                        Movies
                      </Button>
                    </Link>
                    <Link to='/login'>
                      <Button color="inherit">
                        Log In
                      </Button>
                    </Link>
                    <Link to='/signup'>
                      <Button color="inherit">
                        sign Up
                      </Button>
                    </Link>
                  </div>
          }
         
          
        </Toolbar>
      </AppBar>
    </div>
  )
};

Header.propTypes = {
  user: PropTypes.object,
  logout: PropTypes.func,
  resetFavorite: PropTypes.func,
}

export default connect(({user}) => ({user}),{logout, resetFavorite})(Header);
