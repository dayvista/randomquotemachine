import React, { useReducer } from 'react';
import axios from 'axios';
import QuotesReducer from './quotesReducer';
import QuotesContext from './quotesContext';
import {
  GET_QUOTE,
  CLEAR_QUOTE
} from '../types';

const QuotesState = props => {
  const initialState = {
    quote: ''
  };

  const [state, dispatch] = useReducer(QuotesReducer, initialState);

  // Get Quote from API
  const getQuote = () => {
    const res = axios.get('https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json');

    dispatch({
      type: GET_QUOTE,
      payload: res.data
    });
  };
  
  // Clear Previous Quote When Fetching New Quote from API
  const clearQuote = () => dispatch({ type: CLEAR_QUOTE });

  return (
    <QuotesContext.Provider value={{
      quote: state.quote,
      getQuote,
      clearQuote
    }}>
      {props.children}
    </QuotesContext.Provider>
  );
};

export default QuotesState;