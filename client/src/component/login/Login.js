import React from 'react';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { MdFavorite,MdFavoriteBorder } from 'react-icons/lib/md';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import './Login.scss';


function Login(){
  return (
    <div className="Login-Form">
      <form>
        <div className="Login-Email">
          <FormControl fullWidth={true}>
            <InputLabel htmlFor="my-input">Email address</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" type="email" />
          </FormControl>
        </div>
        <div className="Login-Password">
          <FormControl  fullWidth={true}>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input id="password" aria-describedby="my-helper-text" type="password"/>
          </FormControl>
        </div>
        <Button variant="contained" color="primary" fullWidth={true}>Login</Button>
      </form>
      <p>Don't have an account? <Link to='/signup'>Sign up here</Link></p>
    </div>
  )
}

export default Login;