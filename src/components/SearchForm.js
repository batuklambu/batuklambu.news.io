import React from 'react';
import logo from './google.svg';

import { useGlobalContext } from '../context';

const SearchForm = () => {
  const { country, handleSearch } = useGlobalContext();

  return (
    <form className="search-form" onSubmit={(evt) => evt.preventDefault()}>
      <img src={logo} className="App-logo" alt="logo" />
      <h2> news</h2>
      <input
        type="text"
        className="form-input"
        value={country}
        placeholder="search for topics,location andd sources in US"
        onChange={(evt) => handleSearch(evt.target.value)}
      ></input>
    </form>
  );
};

export default SearchForm;
