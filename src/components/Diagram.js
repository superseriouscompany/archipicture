import React, { Component } from 'react';
import Box from '../containers/BoxCtrl';

export default class Diagram extends Component {
  render() { return (
    <div className="diagram">
      <hr width="1" size="100"/>
      { this.props.boxes && this.props.boxes.map((box) => (
        <Box box={box} key={box.id}/>
      ))}
      <div className="create box" onClick={this.props.showPanel}>
        +
      </div>
    </div>
  )}
}

Diagram.propTypes = {
  showPanel: React.PropTypes.func.isRequired,
}
