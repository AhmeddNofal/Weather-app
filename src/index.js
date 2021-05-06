import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import searchReducer from './store/reducers/searchReducer';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(searchReducer, composeWithDevTools(applyMiddleware(thunk)));
ReactDOM.render(<Provider store={store}> <App /> </Provider>, document.getElementById('root'));

