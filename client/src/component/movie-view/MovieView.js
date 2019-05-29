import React,{ Component } from 'react';
import axios from 'axios';
import './MovieView.scss'

class MovieView extends Component {
  state= {
    movie: null,
  }

  componentDidMount() {
    const {id} = this.props.match.params;
    this.onGetMovie(id);
  }

  onGetMovie = (id) => {
    axios.get(`/api/v1/movies/${id}`)
    .then(resp => {
      const movie = resp.data
      this.setState({movie})
    })
    .catch(err => console.log(err));
  }

  render() {
    const {movie} = this.state;
    return (
      <div>
        { movie !== null ?
          <div className="MovieView">
            <div className="Inner-Card">
              <div className="movie-image">
                <img src={movie.ImagePath} alt={movie.Title}/>
              </div>
              <div className="movie-details">
                <div><h1>{movie.Title}</h1></div>
                <div>{movie.Genre.Name}</div>
                <div>{movie.Director.Name}</div>
                <div>{movie.Description}</div>
                <hr />
              </div>
            </div>
            <embed width="100%" height="450" src={movie.Trailer} />
          </div>
          : null
        }
      </div>
    )
  }

}

export default MovieView;