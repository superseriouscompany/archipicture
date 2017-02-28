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
      <img alt="Toy Box representing a virtual machine" style={{width: '40px'}} src="https://ae01.alicdn.com/kf/HTB1GWR9KFXXXXcmXXXXq6xXFXXXA/Baby-Toys-Shape-Sorting-Cube-Classic-Educational-Wooden-Toys-For-Children-Intellectual-Toy-Geometry-Box-Birthday.jpg" />
      <br />
      big box
    </Toy>
  )}
}

export default connect()(BigBox)
