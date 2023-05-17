import React from 'react';
import axios from 'axios';
import UniItem from '../UniItem';
import './style.css'

class UniList extends React.Component {
  state = {
    universities: [],
    loading: true,
    error: null,
  };

  componentDidMount() {
    const { country } = this.props;
    this.fetchUniversities(country);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.country !== this.props.country) {
      this.fetchUniversities(this.props.country);
    }
  }

  fetchUniversities = (country) => {
    axios
      .get(`http://universities.hipolabs.com/search?country=${country}`)
      .then((response) => {
        const universities = response.data.slice(0, 10); 
        this.setState({ universities, loading: false });
      })
      .catch((error) => {
        this.setState({ error: 'Failed to fetch universities', loading: false });
      });
  };

  render() {
    const { universities, loading, error } = this.state;

    if (loading) {
      return <div class="dotted-loader"></div>;
    }

    if (error) {
      return <div>{error}</div>;
    }

    return (
      <div className='uni-container'>
        {console.log(universities)}
        {universities.map((university) => (
    
          <UniItem key={university.id} university={university} />
        ))}
      </div>
    );
  }
}

export default UniList;
