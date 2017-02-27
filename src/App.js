import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Home from './containers/HomeCtrl';
import store from './reducers'

export default class App extends Component {
  render() { return (
    <Provider store={store}>
      <div>
        <a onClick={this.lawng.bind(this)}>Sign in w google</a>
        <Home />
      </div>
    </Provider>
  )}

  lawng() {
    window.gapi.client.setApiKey('PPm-U9_f5o_8sYQ64dzvilm9')
    window.gapi.auth.authorize({
      client_id: '996546979196-hbefa3mq559ie30ucuh96r44trcnuqff.apps.googleusercontent.com',
      scope:     'https://www.googleapis.com/auth/compute',
      immediate: false,
    }, function(authResult) {
      console.log(authResult);
      if (authResult && !authResult.error) {
        alert('Auth was successful!');
      } else {
        alert('Auth was not successful');
      }
    })
  }
}
