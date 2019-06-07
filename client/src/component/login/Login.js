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
import Typography from '@material-ui/core/Typography';
import FormWrap from '../UI/wrapper/FormWrapper';
import { login } from '../../actions/session';
import { getFavorite } from '../../actions/favorite';
import { hideModal } from '../../actions/modal';
import './Login.scss';


const Login = ({history, login, getFavorite, hideModal}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmitted = (e) => {
    e.preventDefault();
    if(password !== '' || email !== '') {
      login(email, password)
      .then(res => {
        if(res.status !== 400){
          getFavorite(res.data._id);
        }
      })
      .then(history.push('/'))
    }
  }

  return (
    <div className="Login-Form">
      <div className="Inner-Login-Form">
        <FormWrap>
          <form onSubmit={onSubmitted}>
            <Typography gutterBottom variant="h5" component="h2">
              Log in
            </Typography>
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
            <Button variant="contained" color="secondary" fullWidth={true} type="submit">Login</Button>
            <p>Don't have an account? <Link to='/signup'>Sign up here</Link></p>
          </form>
        </FormWrap> 
      </div>
    </div>
  )
}

export default connect(null,{login, getFavorite, hideModal})(Login);