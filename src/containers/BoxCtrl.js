import React, {Component} from 'react';
import { connect } from 'react-redux';
import Box from '../components/Box'

class BoxCtrl extends Component {
  constructor(props) {
    super(props)
    this.showPanel = this.showPanel.bind(this)
  }

  showPanel() {
    this.props.dispatch({
      type:      'panel:show',
      panelType: 'box-info',
      box:       this.props.box,
      title:     `Edit ${this.props.box.name}`,
    })
  }

  render() { return (
    <Box {...this.props} showPanel={this.showPanel}/>
  )}
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(BoxCtrl);
