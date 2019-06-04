import React, { useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Button from '@material-ui/core/Button';
import { MdFavorite,MdFavoriteBorder } from 'react-icons/lib/md';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import './Login.scss';
import FormWrap from '../UI/wrapper/FormWrapper';
import { login } from '../../actions/session';


function Login({history, login}){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmitted = (e) => {
    e.preventDefault();
    login(email, password)
      .then(res => {
        history.push('/');
      })
   
  }

  return (
    <div className="Login-Form">
      <div className="Inner-Login-Form">
        <FormWrap>
          <form onSubmit={onSubmitted}>
            <div className="Login-Email">
              <FormControl fullWidth={true}>
                <InputLabel htmlFor="email">Email address</InputLabel>
                <Input id="email"
                  aria-describedby="my-helper-text"
                  type="email" 
                  onChange={e => setEmail(e.target.value)}
                  value={email}
                />
              </FormControl>
            </div>
            <div className="Login-Password">
              <FormControl  fullWidth={true}>
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input id="password"
                  aria-describedby="my-helper-text"
                  type="password"
                  onChange={e => setPassword(e.target.value)}
                  value={password}
                />
              </FormControl>
            </div>
            <Button variant="contained" color="primary" fullWidth={true} type="submit">Login</Button>
            <p>Don't have an account? <Link to='/signup'>Sign up here</Link></p>
          </form>
        </FormWrap> 
      </div>
    </div>
  )
}

export default connect(null,{login})(Login);