import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { MdFavorite,MdFavoriteBorder } from 'react-icons/lib/md';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import './Login.scss';
import FormWrap from '../UI/wrapper/FormWrapper';


function Login(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmitted = (e) => {
    e.preventDefault();
    console.log(email, password)
    setEmail('');
    setPassword('');
  }

  return (
    <div className="Login-Form">
      <div className="Inner-Login-Form">
        <FormWrap>
          <form onSubmit={onSubmitted}>
            <div className="Login-Email">
              <FormControl fullWidth={true}>
                <InputLabel htmlFor="my-input">Email address</InputLabel>
                <Input id="my-input"
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

export default Login;