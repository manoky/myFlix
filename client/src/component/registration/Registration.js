import React from 'react';
import Button from '@material-ui/core/Button';
import { MdFavorite,MdFavoriteBorder } from 'react-icons/lib/md';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import './Registration.scss';


function Registration(){
  return (
    <div className="Registration-Form">
      <form>
      <div className="Registration-Email">
          <FormControl>
            <InputLabel htmlFor="my-input">Username</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />
          </FormControl>
        </div>
        <div className="Registration-Email">
          <FormControl>
            <InputLabel htmlFor="my-input">Email address</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" type="email" />
          </FormControl>
        </div>
        <div className="Registration-Password">
          <FormControl>
            <InputLabel htmlFor="my-input">Password</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" type="password" color="primary"/>
          </FormControl>
        </div>
        <Button  variant="contained" color="primary" fullWidth={true}>Submit</Button>
      </form>
    </div>
  )
}

export default Registration;