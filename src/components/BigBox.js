import React, { Component } from 'react'
import { connect } from 'react-redux'
import Toy from './Toy';

class BigBox extends Component {
  constructor(props) {
    super(props)
    this.handleDrop = this.handleDrop.bind(this)
  }

  handleDrop(dropResult) {
    this.props.dispatch({
      type: 'mat:addBox',
      box:  {name: 'bigbox'},
    })
  }

  render() {
  return(
    <Toy name="bigbox" handleDrop={this.handleDrop}>
      <div className="image">
        <img alt="Toy Box representing a virtual machine" style={{width: '238px'}} src="bigbox@2x.png" />
      </div>
      <div className="label">big box</div>
    </Toy>
  )}
}

export default connect()(BigBox)
