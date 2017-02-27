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
    boxes: [
      {
        id:          1,
        name:        'floats.superserious.co',
        description: 'rad rad pad',
        price:       '$25/month',
        region:      'Europe - London',
        cpu:         4,
        memory:      '15gb',
        sha:         '78cfdfb8dfc63b5098e3941da588f7e6fe4ea874',
        ip:          '10.1.1.2',
        sshUsername: 'neilsarkar',
      }
    ]
  }

  return {
    boxes: state.infra.boxes,
  }
}

export default connect(mapStateToProps)(DiagramCtrl);
