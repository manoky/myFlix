import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import './Sidebar.scss';


const Sidebar = ({movies}) => {
  let names = [];
	let direct = []
  movies.map(m => {
		names.push(m.Genre.Name);
		direct.push(m.Director.Name)
	});
	const genres = names.filter((m,i,a) => a.indexOf(m)===i);
	const directors = direct.filter((m,i,a) => a.indexOf(m)===i);
  
  return (
    <div className='sidebar'>
      <div className='genre-bar'>
        <h3>Genres</h3>
        {
          
          genres.map((genre,i) => {
            return(
            <p key={i}>
              <Link to={`/genres/${genre}`}>
              	{genre}
              </Link>
            </p>
          )})
        }
      </div>
      <div className='director-bar'>
			<h3>Directors</h3>
        {
          directors.map((director,i) => {
            return(
            <p key={i}>
              <Link to={`/directors/${director}`}>
              	{director}
              </Link>
            </p>
          )})
        }
			</div>
      <div>Featured Movies</div>
    </div>
  )
}

Sidebar.propTypes = {
  movies: PropTypes.array,
}

export default connect(({movies}) => ({movies}))(Sidebar);
