import React, { Component } from 'react'
import Toy from './Toy';

export default class LilBox extends Component {
  constructor(props) {
    super(props)
    this.state = { firstTime: true }
  }

  render() {
    const className = this.state.firstTime ? 'animated infinite pulse' : '';
  return(
    <Toy name="lilbox" className={className} onMouseDown={() => this.setState({firstTime: false})}>
      <img alt="Toy Box representing a virtual machine" style={{width: '40px'}} src="https://ae01.alicdn.com/kf/HTB1GWR9KFXXXXcmXXXXq6xXFXXXA/Baby-Toys-Shape-Sorting-Cube-Classic-Educational-Wooden-Toys-For-Children-Intellectual-Toy-Geometry-Box-Birthday.jpg" />
      <br />
      lil box
    </Toy>
  )}
}
