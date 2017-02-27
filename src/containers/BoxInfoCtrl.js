import React, {Component} from 'react';
import { connect } from 'react-redux';
import BoxInfo from '../components/BoxInfo'

class BoxInfoCtrl extends Component {
  constructor(props) {
    super(props)
    this.updateBox = this.updateBox.bind(this)
  }

  updateBox(box) {
    this.props.dispatch({
      type: 'infra:update',
      box:  box,
    })
    this.props.dispatch({
      type: 'panel:hide'
    })
  }

  render() { return (
    <BoxInfo {...this.props} updateBox={this.updateBox}/>
  )}
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(BoxInfoCtrl);
