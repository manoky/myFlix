import React, { useState } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { MdFavorite,MdFavoriteBorder } from 'react-icons/lib/md';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Typography from '@material-ui/core/Typography';
import './Registration.scss';
import FormWrap from '../UI/wrapper/FormWrapper';
import {signUp} from '../../actions/session';


function Registration({history, signUp}){
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
  const onSignUp = (e) => {
    e.preventDefault();
    signUp(username, email, password)
    history.push('/');
  }

  return (
    <div className="Registration-Form">
      <div className="Inner-Login-Form">
        <FormWrap>
            
          <form onSubmit={onSignUp}>
            <Typography gutterBottom variant="h5" component="h2">
              Sign Up
            </Typography>
          <div className="Registration-Email">
              <FormControl fullWidth={true}>
                <InputLabel htmlFor="username">Username</InputLabel>
                <Input 
                  id="username" 
                  aria-describedby="my-helper-text" 
                  onChange={(e) => setUsername(e.target.value)}
                />
              </FormControl>
            </div>
            <div className="Registration-Email">
              <FormControl fullWidth={true}>
                <InputLabel htmlFor="emailt">Email address</InputLabel>
                <Input 
                  id="emailt" 
                  aria-describedby="my-helper-text" 
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
            </div>
            <div className="Registration-Password">
              <FormControl fullWidth={true}>
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input 
                  id="password" 
                  aria-describedby="my-helper-text" 
                  type="password" 
                  color="primary"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormControl>
            </div>
            <Button  variant="contained" color="secondary" fullWidth={true} type="submit">Submit</Button>
          </form>
        </FormWrap>
      </div>
    </div>
  )
}

Registration.propTypes = {
  history: PropTypes.object,
  signUp: PropTypes.func,
}

export default connect(null,{signUp})(Registration);