import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {logout} from '../../actions/session';
import { resetFavorite } from '../../actions/favorite';
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
                    <Button color="inherit" onClick={resetFavorite}>
                      <Link to='/' onClick={logout}> Log Out</Link>
                    </Button>
                    <Button color="inherit">
                      <Link to='/user'> My Account</Link>
                    </Button>
                  </div>
                  :
                  <div>
                    <Button color="inherit">
                      <Link to='/login'>Log In</Link>
                    </Button>
                    <Button color="inherit">
                      <Link to='/signup'>sign Up</Link>
                    </Button>
                  </div>
          }
         
          
        </Toolbar>
      </AppBar>
    </div>
  )
};

export default connect(({user}) => ({user}),{logout, resetFavorite})(Header);
