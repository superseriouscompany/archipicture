import React, {Component} from 'react';
import { connect } from 'react-redux';
import Panel from '../components/Panel'

class PanelCtrl extends Component {
  constructor(props) {
    super(props)
    this.closePanel = this.closePanel.bind(this)
  }

  closePanel() {
    this.props.dispatch({type: 'panel:hide'})
  }

  render() { return (
    <Panel {...this.props} closePanel={this.closePanel}/>
  )}
}

function mapStateToProps(state) {
  return {
    title:     state.panel.title || 'Info Panel',
    panelType: state.panel.panelType,
    box:       state.panel.box,
  };
}

export default connect(mapStateToProps)(PanelCtrl);
