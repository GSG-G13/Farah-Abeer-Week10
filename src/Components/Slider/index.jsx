import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './style.css';

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovered: false,
    };
  }

  handleHover = (hoverState) => {
    this.setState({ isHovered: hoverState });
  };

  render() {
    const { isHovered } = this.state;

    const unis = [
      {
        id: 1,
        image:
          'https://images.unsplash.com/photo-1588943897349-73947534cc3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80',
      },
      {
        id: 2,
        image:
          'https://images.unsplash.com/photo-1612036520772-73faad059bbf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      },
      {
        id: 3,
        image:
          'https://images.unsplash.com/photo-1627556704290-2b1f5853ff78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      },
      {
        id: 4,
        image:
          'https://images.unsplash.com/photo-1620459000323-c21c7c466c20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      },
      {
        id: 5,
        image:
          'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
      },
      {
        id: 6,
        image:
          'https://images.unsplash.com/photo-1532294220147-279399e4e00f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      },
      {
        id: 7,
        image:
          'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      },
      {
        id: 8,
        image:
          'https://images.unsplash.com/photo-1501503069356-3c6b82a17d89?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      },
    ];

    return (
      <Carousel
        autoPlay={!isHovered}
        infiniteLoop
        showStatus={false}
        showThumbs={false}
        showIndicators={false}
        centerMode
        centerSlidePercentage={70}
        dynamicHeight
        stopOnHover={false}
        onMouseEnter={() => this.handleHover(true)}
        onMouseLeave={() => this.handleHover(false)}
      >
        {unis.map((uni) => (
          <div key={uni.id} className="carousel-slide">
            <img src={uni.image} alt={`cars.com`} />
          </div>
        ))}
      </Carousel>
    );
  }
}

export default Slider;
