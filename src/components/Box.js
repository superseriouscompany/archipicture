import React, { Component } from 'react'

export default class Box extends Component {
  render() { return (
    <div className="box">
      {this.props.box.name}
    </div>
  )}
}

Box.propTypes = {
  box: React.PropTypes.shape({
    name: React.PropTypes.string,
  }).isRequired
}
