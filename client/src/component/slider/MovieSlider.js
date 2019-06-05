import React, {Component} from 'react';
import Slider from "react-slick";
import { connect } from 'react-redux';
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
                <div>
                  <img src={movie.ImagePath} className="slider-img" />
                </div>
              )
            })
          }
        </Slider>
      </div>
    );
  }
}
export default connect(({movies}) => ({movies}))(MovieSlider);