import React from 'react';
import { connect } from 'react-redux';
import MCard from '../movie-card/MCard';
import './Directors.scss';


const Directors = ({movies, match}) => {
	const directors = movies.filter(m => m.Director.Name === match.params.name);
	const directorInfo = directors[0];
	console.log('Directors',directors)
	return (
		<div className="Director">
			<div className='director-info'>
				<h2>{directorInfo.Director.Name}</h2>
				<p>
					{directorInfo.Director.Bio}
				</p>
				<p>Date of Birth: {directorInfo.Director.DoB ? directorInfo.Director.DoB : 'N/A'}</p>
				<p>Place of Birth: {directorInfo.Director.PoB ? directorInfo.Director.PoB : 'N/A'}</p>
				<p></p>
				<h2>Movies Directed by {`${directorInfo.Director.Name}`}</h2>

				<div className="director-movies">
					{
						directors.map(movie => (
							<div key={movie._id}>
								<MCard movie={movie} />
							</div>
						))
					}
				</div>
			</div>
		</div>
  )
}

export default connect(({movies}) => ({movies}))(Directors);