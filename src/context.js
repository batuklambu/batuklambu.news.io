import React, { createContext, useContext, useEffect, useReducer } from 'react';
import reducer from './reducer';
import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from './actions.js';

const apiKey = '36917187e8994dc3a126a5c28429fdb6';
// const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
// const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
const url = 'https://newsapi.org/v2/top-headlines?';

const intialState = {
  isLoading: true,
  articles: [],
  page: 0,
  pageSize: 0,
  q: 'Disney',

  apiKey: '36917187e8994dc3a126a5c28429fdb6',
};

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, intialState);

  const fetchStories = async (url) => {
    dispatch({ type: SET_LOADING });
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchStories(
      `${url}q=${state.q}&apiKey=${state.apiKey}&page=${state.page}`
    );
  }, []);

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
