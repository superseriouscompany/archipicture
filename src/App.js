import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Container from './components/Container';
import store from './reducers'

export default class App extends Component {
  render() { return (
    <Provider store={store}>
      <Container />
    </Provider>
  )}
}
