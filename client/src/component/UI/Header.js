import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import './Header.scss';
import {logout} from '../../actions/session';


const Header = ({ logout }) => {
  return (
    <div className="Header">
      <div>Header</div>
      <Link to='/login'>
        <Button variant="contained" color="primary">
          Log In
        </Button>
      </Link>&nbsp;

      <Link to='/signup'>
        <Button variant="contained" color="primary">
          Sign Up
        </Button>
      </Link>

      <Link to='/'>
        <Button variant="contained" color="primary">
          Movies
        </Button>
      </Link>
      <Link to='/'>
        <Button variant="contained" color="primary" onClick={logout}>
          Log Out
        </Button>
      </Link>
    </div>
  )
};

export default connect(null,{logout})(Header);
