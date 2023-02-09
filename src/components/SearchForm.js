import React from 'react';
import { useGlobalContext } from '../context';

const SearchForm = () => {
  const { q, handleSearch } = useGlobalContext();

  return (
    <form className="search-form" onSubmit={(evt) => evt.preventDefault()}>
      <h2>search google news</h2>
      <input
        type="text"
        className="form-input"
        value={q}
        onChange={(evt) => handleSearch(evt.target.value)}
      ></input>
    </form>
  );
};

export default SearchForm;
