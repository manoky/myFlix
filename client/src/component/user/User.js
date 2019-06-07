import React from 'react';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { connect } from 'react-redux';
import Edit from '@material-ui/icons/Edit';
import MCard from '../movie-card/MCard';
import './User.scss';


const User = ({user,movies, favorites}) => {
  return(
    <div className="User">
      <div className="User-wrapper">
        <div className="User-profile">
            <List className="root">
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="User" src={""} />
                </ListItemAvatar>
                <ListItemText
                  primary={user ? user.Username : null}
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        className="inline"
                        color="textPrimary"
                      >
                        Email: {user ? user.Email : null}
                      </Typography>
                      <Typography
                        component="span"
                        variant="body2"
                        className="inline"
                        color="textPrimary"
                      >
                        <Edit />
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
            </List>
        </div>
        <div className="favorite-column">
          <h1>Favorite Movies</h1>
          <div className="favorite-grid">
            {
              movies.filter(m => favorites.includes(m._id)).map(movie => {
                return (
                  <MCard movie={movie}/>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default connect(({user, movies, favorites }) => ({user, movies, favorites}))(User);
