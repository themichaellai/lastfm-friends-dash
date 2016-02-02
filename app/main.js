import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import queryString from 'query-string';
import App from './App';
import reducers from './reducers';

const store = createStore(
  reducers,
  applyMiddleware(
    thunk
  )
);

const qs = queryString.parse(location.search);
ReactDOM.render(
  <Provider store={store}><App username={qs.username} /></Provider>,
  document.getElementById('main')
);
