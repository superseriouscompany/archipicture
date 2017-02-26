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
  return {};
}

export default connect(mapStateToProps)(PanelCtrl);
