import React, { createContext, useContext, useEffect, useReducer } from 'react';
import reducer from './reducer';
import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from './actions.js';

// const apiKey = '36917187e8994dc3a126a5c28429fdb6';
// const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
// const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
const url = 'https://newsapi.org/v2/top-headlines?';

const intialState = {
  isLoading: true,
  articles: [],
  page: 0,
  pageSize: 10,
  q: 'Disney',
  totalResults: 0,
  apiKey: 'b1ba4c65195a4399af6d0685b68b74d9',
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
      dispatch({
        type: SET_STORIES,
        payload: {
          articles: data.articles,
          pageSize: data.pageSize,
          totalResults: data.totalResults,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const removeStory = (publishedAt) => {
    dispatch({ type: REMOVE_STORY, payload: publishedAt });
    console.log(publishedAt);
  };

  const handleSearch = (q) => {
    dispatch({ type: HANDLE_SEARCH, payload: q });
  };

  const handlePage = (value) => {
    console.log(value);
    dispatch({ type: HANDLE_PAGE, payload: value });
  };

  useEffect(() => {
    fetchStories(
      `${url}q=${state.q}&apiKey=${state.apiKey}&page=${state.page}`
    );
  }, [state.q, state.page, state.apiKey]);

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
