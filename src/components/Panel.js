import React, { Component } from 'react'
import '../styles/Panel.css'

export default class Panel extends Component {
  render() { return (
    <div className="info panel">
      Info Panel
      <a className="close" onClick={this.props.closePanel}>&times;</a>
    </div>
  )}
}

Panel.propTypes = {
  closePanel: React.PropTypes.func.isRequired,
}
