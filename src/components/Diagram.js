import React, { Component } from 'react';
import '../styles/Diagram.css'

export default class Diagram extends Component {
  render() { return (
    <div className="diagram">
      <hr width="1" size="100"/>
      <div className="create box" onClick={this.props.showPanel}>
        +
      </div>
    </div>
  )}
}

Diagram.propTypes = {
  showPanel: React.PropTypes.func.isRequired,
}