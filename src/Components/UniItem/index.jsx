import React from 'react';
import Photo from '../Photo';
import './style.css';
import { FiLink } from 'react-icons/fi';

const UniItem = ({ university }) => {
  const { name, country, web_pages } = university;

  return (
    <div className='uni-card '> 
    <Photo country={country} className='uni-image' />
    
      <h3 className='uni-details'>{name}<a className='uni-links' href={web_pages[0]} target="_blank" rel="noopener noreferrer"><FiLink /></a></h3>
      <p className='uni-details'>Country: {country}</p>
      
      
    </div>
  );
};

export default UniItem;
