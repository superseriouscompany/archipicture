import React, { Component } from 'react'
import Toy from './Toy';

export default class BigBox extends Component {
  render() {
  return(
    <Toy name="bigbox">
      <img alt="Toy Box representing a virtual machine" style={{width: '40px'}} src="https://ae01.alicdn.com/kf/HTB1GWR9KFXXXXcmXXXXq6xXFXXXA/Baby-Toys-Shape-Sorting-Cube-Classic-Educational-Wooden-Toys-For-Children-Intellectual-Toy-Geometry-Box-Birthday.jpg" />
      <br />
      big box
    </Toy>
  )}
}
