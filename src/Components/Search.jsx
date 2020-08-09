import React from 'react';
import './search.css';
import SearchIcon from '../Assets/Icons/Icon feather-search.png';

const Search = ({handleChange}) => (
    <div>
    <img src={SearchIcon} alt="SearchIcon" className='searchIcon'/>
    <input className = 'search'
    type='search'
    placeholder = 'Search Your Favourite Recipe..' 
    onChange = { handleChange }
    />
    </div>
)

export default Search;