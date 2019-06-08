import React from 'react';
import { connect } from 'react-redux';
import './Genre.scss';
import Card from '../component/movie-view/Card';

const Genre = ({movies, match}) => {
	const sameGenre = movies.filter(m => m.Genre.Name === match.params.name);
	const genreInfo = sameGenre[0];

	return (
		<div className="Genre">
			<div>
				<h1>{genreInfo.Genre.Name}</h1>
				<p>Top {`${genreInfo.Genre.Name}`} Movies</p>
			</div>
			<div>
				{
					sameGenre.map(movie => {
						return(
							<div key={movie._id} className="genre-row">
								<Card movie={movie} />
							</div>
						)
					})
				}
			</div>
		</div>
  )
}

export default connect(({movies}) => ({movies}))(Genre);