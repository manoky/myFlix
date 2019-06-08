import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Typography from '@material-ui/core/Typography';
import FormWrap from '../UI/wrapper/FormWrapper';
import { login } from '../../actions/session';
import { getFavorite } from '../../actions/favorite';
import { hideModal } from '../../actions/modal';
import PropTypes from 'prop-types';
import './Login.scss';


const Login = ({history, login, getFavorite, hideModal}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmitted = (e) => {
    e.preventDefault();
    if(password !== '' && email !== '') {
      login(email, password)
      .then(res => {
        if(res.status !== 400){
          getFavorite(res.data._id);
        }
      })
      .then(() => {
        hideModal();
        history.push('/')
      })
    }
  }
  console.log(password)
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

Login.propTypes = {
  login: PropTypes.func,
  getFavorite: PropTypes.func,
  hideModal: PropTypes.func,
  history: PropTypes.object,
  hideModal: PropTypes.func,
}

export default connect(null,{login, getFavorite, hideModal})(Login);