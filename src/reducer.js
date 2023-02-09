import React from 'react';
import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from './actions.js';

const reducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, isLoading: true };
    case SET_STORIES:
      return {
        ...state,
        isLoading: false,
        articles: action.payload.articles,
        pageSize: action.payload.pageSize,
        totalResults: action.payload.totalResults,
      };

    default:
      throw new Error(`no matching "${action.type}" action type`);
  }
};

export default reducer;
