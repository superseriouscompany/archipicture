import React, { Component } from 'react'

export default class Box extends Component {
  render() { return (
    <div className="box" onClick={(e) => e.target.tagName !== 'A' && this.props.showPanel() }>
      <div className="name">{this.props.box.name}</div>
      <div className="price">
        {this.props.box.price}
      </div>
      <div className="ip">
        <a href="http://10.1.1.2">10.1.1.2</a>
      </div>
      <div className="git">
        <a>ssh://git@archipicture.superserious.co:/archipicture.superserious.co.git</a>
      </div>
    </div>
  )}
}

Box.propTypes = {
  showPanel: React.PropTypes.func.isRequired,
  box: React.PropTypes.shape({
    name: React.PropTypes.string,
  }).isRequired
}
