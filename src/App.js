import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Home from './containers/HomeCtrl';
import Google from './components/Google';
import store from './reducers'

export default class App extends Component {
  render() { return (
    <Provider store={store}>
      <Google />
    </Provider>
  )}
}
