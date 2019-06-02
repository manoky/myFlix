import React from 'react';
import Button from '@material-ui/core/Button';
import { MdFavorite,MdFavoriteBorder } from 'react-icons/lib/md';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import './Registration.scss';
import FormWrap from '../UI/wrapper/FormWrapper';


function Registration(){
  return (
    <div className="Registration-Form">
      <div className="Inner-Login-Form">
        <FormWrap>
          <form>
          <div className="Registration-Email">
              <FormControl fullWidth={true}>
                <InputLabel htmlFor="my-input">Username</InputLabel>
                <Input id="my-input" aria-describedby="my-helper-text" />
              </FormControl>
            </div>
            <div className="Registration-Email">
              <FormControl fullWidth={true}>
                <InputLabel htmlFor="my-input">Email address</InputLabel>
                <Input id="my-input" aria-describedby="my-helper-text" type="email" />
              </FormControl>
            </div>
            <div className="Registration-Password">
              <FormControl fullWidth={true}>
                <InputLabel htmlFor="my-input">Password</InputLabel>
                <Input id="my-input" aria-describedby="my-helper-text" type="password" color="primary"/>
              </FormControl>
            </div>
            <Button  variant="contained" color="primary" fullWidth={true}>Submit</Button>
          </form>
        </FormWrap>
      </div>
    </div>
  )
}

export default Registration;