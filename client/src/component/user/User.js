import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import MCard from '../movie-card/MCard';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import './User.scss';


const User = ({user,movies, favorites}) => {

  const [editting, setEditting] = useState(false);

  const updateUser =() => (
    setEditting(true)
  );

  const displayUser = () => (
    <div>
      <p>
        <img src="https://image.flaticon.com/icons/svg/181/181549.svg" alt={user.Username} />
        <span className="username">{user.Username}</span>
      </p>
      
      <p>Email: {user.Email}</p>
        <Button color="inherit" size="small" onClick={updateUser}>
          Edit
        </Button>
        <Button color="inherit" size="small">
          Delete
        </Button>
    </div>
  );

  const displayForm = () => (
    <form>
      <Typography gutterBottom variant="h5" component="h2">
        Edit Profile
      </Typography>
    <div className="Registration-Email">
        <FormControl fullWidth={true}>
          <InputLabel htmlFor="username">Username</InputLabel>
          <Input 
            id="username" 
            aria-describedby="my-helper-text"
            value={user.Username}
            //onChange={(e) => setUsername(e.target.value)}
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
            value={user.Email}
           // onChange={(e) => setEmail(e.target.value)}
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
            //onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>
      </div>
      <Button  variant="contained" color="secondary" fullWidth={true} type="submit">Submit</Button>
    </form>
  );

  return(
    <div className="User">
      <div className="User-wrapper">
        <div className="User-profile">
          {editting ? displayForm() : displayUser()}
        </div>
        <div className="favorite-column">
          <h1>Favorite Movies</h1>
          <div className="favorite-grid">
            {
              movies.filter(m => favorites.includes(m._id)).map(movie => {
                return (
                  <MCard key={movie._id} movie={movie}/>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

User.propTypes = {
  user: PropTypes.object,
  movies: PropTypes.array,
  favorites: PropTypes.array,
}

export default connect(({user, movies, favorites }) => ({user, movies, favorites}))(User);
