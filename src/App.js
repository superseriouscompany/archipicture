import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Playpen from './components/Playpen';
import store from './reducers'

export default class App extends Component {
  render() { return (
    <Provider store={store}>
      <Playpen />
    </Provider>
  )}
}
