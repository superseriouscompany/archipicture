import React, {Component} from 'react';
import { connect } from 'react-redux';
import Home from '../components/Home'

class HomeCtrl extends Component {
  render() { return (
    <Home {...this.props} />
  )}
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(HomeCtrl);
