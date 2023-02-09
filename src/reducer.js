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
    case REMOVE_STORY:
      return {
        ...state,
        articles: state.articles.filter(
          (story) => story.publishedAt !== action.payload
        ),
      };
    case HANDLE_SEARCH:
      return {
        ...state,
        country: action.payload,
        page: 0,
      };

    case HANDLE_PAGE:
      if (action.payload === 'inc') {
        let nextPage = state.page + 1;
        if (nextPage > state.pageSize - 1) {
          nextPage = 0;
        }
        return { ...state, page: nextPage };
      }
      if (action.payload === 'dec') {
        let prevPage = state.page - 1;
        if (prevPage < 0) {
          prevPage = state.pageSize - 1;
        }
        return {
          ...state,
          page: prevPage,
        };
      }

    default:
      throw new Error(`no matching "${action.type}" action type`);
  }
};

export default reducer;
