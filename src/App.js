import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Home from './containers/HomeCtrl';
import store from './reducers'

export default class App extends Component {
  render() { return (
    <Provider store={store}>
      <div>
        <Home />
      </div>
    </Provider>
  )}
}
