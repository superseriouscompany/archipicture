import React, {Component} from 'react';
import { connect } from 'react-redux';
import Home from '../components/Home'

class HomeCtrl extends Component {
  render() { return (
    <Home {...this.props} />
  )}
}

function mapStateToProps(state) {
  return {
    showPanel: !!state.panel.visible,
  };
}

export default connect(mapStateToProps)(HomeCtrl);
