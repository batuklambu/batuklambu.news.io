import React, { createContext, useContext, useEffect, useReducer } from 'react';
import reducer from './reducer';
import {
  SET_LOADING,
  SET_NEWS,
  REMOVE_NEWS,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from './actions.js';

// const apiKey = '36917187e8994dc3a126a5c28429fdb6';
// const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
// const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
// const url = 'https://newsapi.org/v2/top-headlines?';
// const url = 'https://newsapi.org/v2/everything?';

// https://newsapi.org/v2/everything?q=us&apiKey=b1ba4c65195a4399af6d0685b68b74d9

const intialState = {
  isLoading: true,
  articles: [],
  page: 0,
  pageSize: 20,
  //   q: 'tesla',
  country: 'us',
  totalResults: 0,
  apiKey: process.env.REACT_APP_API_KEY,
};

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, intialState);

  const fetchStories = async () => {
    dispatch({ type: SET_LOADING });
    try {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${state.country}&apiKey=${state.apiKey}`
      );
      const data = await response.json();
      console.log(data);
      dispatch({
        type: SET_NEWS, //
        payload: {
          articles: data.articles,
          pageSize: Math.ceil(data.totalResults / 20),
          totalResults: data.totalResults,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const removeStory = (publishedAt) => {
    dispatch({ type: REMOVE_NEWS, payload: publishedAt });
    console.log(publishedAt);
  };

  const handleSearch = (country) => {
    dispatch({ type: HANDLE_SEARCH, payload: country });
    // console.log(country);
  };

  const handlePage = (value) => {
    console.log(value);
    dispatch({ type: HANDLE_PAGE, payload: value });
  };

  useEffect(() => {
    fetchStories();
    // `${url}country=${state.country}&apiKey=${state.apiKey}&page=${state.page}`
  }, [state.country]);

  return (
    <AppContext.Provider
      value={{ ...state, removeStory, handleSearch, handlePage }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
