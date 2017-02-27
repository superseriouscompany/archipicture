import React, {Component} from 'react';
import { connect } from 'react-redux';
import BoxInfo from '../components/BoxInfo'

class BoxInfoCtrl extends Component {
  render() { return (
    <BoxInfo {...this.props} />
  )}
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(BoxInfoCtrl);
