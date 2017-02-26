import React, {Component} from 'react';
import { connect } from 'react-redux';
import Diagram from '../components/Diagram'

class DiagramCtrl extends Component {
  render() { return (
    <Diagram {...this.props} />
  )}
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(DiagramCtrl);
