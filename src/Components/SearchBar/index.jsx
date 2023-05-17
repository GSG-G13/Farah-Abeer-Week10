import React from 'react';
import { FiSearch ,FiHeart} from 'react-icons/fi';
import './style.css'
class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
  
      searchTerm: '',
    };
  }



  handleInputChange = (event) => {
    const searchTerm = event.target.value;
    this.setState({ searchTerm });
  };

  handleSearch = (event) => {
    event.preventDefault();
    const { searchTerm } = this.state;
    this.props.onSearch(searchTerm);
  };

  render() {
    const { searchTerm } = this.state;

    return (
      <div className={`input-box`}>
        <h1>Find Your Dream University <FiHeart/> </h1> 
        <form onSubmit={this.handleSearch}>
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={this.handleInputChange}
          />
          <button type="submit" className="icon" onClick={this.handleSearch} onKeyDown={(e)=>e.key === 'Enter'?this.handleSearch:false}>
            <FiSearch className="search-icon" />
          </button>
        </form>
       
      </div>
    );
  }
}

export default SearchBar;
