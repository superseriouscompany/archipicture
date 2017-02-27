import React, {Component} from 'react';
import { connect } from 'react-redux';
import Diagram from '../components/Diagram'

class DiagramCtrl extends Component {
  constructor(props) {
    super(props)
    this.showPanel = this.showPanel.bind(this)
  }

  render() { return (
    <Diagram {...this.props} showPanel={this.showPanel}/>
  )}

  showPanel() {
    this.props.dispatch({type: 'panel:show'})
  }
}

function mapStateToProps(state) {
  return {
    boxes: state.infra.boxes,
  }
}

export default connect(mapStateToProps)(DiagramCtrl);
