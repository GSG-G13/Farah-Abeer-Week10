import React from 'react';
import UniList from './UniList';

import SearchBar from './SearchBar';

class ParentComponent extends React.Component {
  state = {
    country: '',
  };

  handleCountrySearch = (country) => {
    this.setState({ country });
  };

  render() {
    const { country } = this.state;

    return (
      <div>
        <SearchBar onSearch={this.handleCountrySearch} placeholder="Search by country" />
        <UniList country={country} />
      </div>
    );
  }
}

export default ParentComponent;
