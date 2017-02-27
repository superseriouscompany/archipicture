import React, {Component} from 'react';
import { connect } from 'react-redux';
import Box from '../components/Box'

class BoxCtrl extends Component {
  render() { return (
    <Box {...this.props} />
  )}
}

function mapStateToProps(state) {
  return {
  };
}

export default connect(mapStateToProps)(BoxCtrl);
