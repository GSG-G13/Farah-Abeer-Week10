import React from 'react';
import axios from 'axios';
import { Token } from './Token';
import './style.css'
class Photo extends React.Component {
  state = {
    photoUrl: null,
    loading: true,
    error: null,
  };

  componentDidMount() {
    const { country } = this.props;
    this.fetchPhoto(country);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.country !== this.props.country) {
      this.fetchPhoto(this.props.country);
    }
  }

  fetchPhoto = async (country) => {
    try {
      const response = await axios.get(
        `https://api.unsplash.com/photos/random?query=campus,${country}&client_id=${Token}`
      );

      const photoUrl = response.data.urls.regular;

      this.setState({ photoUrl, loading: false });
    } catch (error) {
      this.setState({photoUrl:'https://picsum.photos/seed/picsum/500/300' , loading: false });
    }
  };

  render() {
    const { photoUrl, loading, error } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>{error}</div>;
    }

    return <img src={photoUrl} alt="University" className='photo'/>;
  }
}

 export default Photo;
