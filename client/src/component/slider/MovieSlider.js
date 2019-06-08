import React, {Component} from 'react';
import Slider from "react-slick";
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import './Slider.scss';

class MovieSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
    };
    const {movies} = this.props;
    return (
      <div className="Slider">
        <Slider {...settings}>
          {
            movies.map(movie => {
              return(
                <div key={movie._id}>
                  <Link to={`/movies/${movie._id}`}>
                    <img src={movie.ImagePath}  className="slider-img" />
                  </Link>
                </div>
              )
            })
          }
        </Slider>
      </div>
    );
  }
}

MovieSlider.propTypes = {
  movies: PropTypes.array,
}

export default connect(({movies}) => ({movies}))(MovieSlider);