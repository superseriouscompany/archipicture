import React, { Component } from 'react'
import '../styles/Panel.css'
import CreateBox from '../containers/CreateBoxCtrl';

export default class Panel extends Component {
  render() { return (
    <div className="info panel">
      <h2>
        {this.props.title}
        <a className="close" onClick={this.props.closePanel}>&times;</a>
      </h2>

      <CreateBox />
    </div>
  )}
}

Panel.propTypes = {
  title:      React.PropTypes.string.isRequired,
  closePanel: React.PropTypes.func.isRequired,
}
