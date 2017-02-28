import React, { Component } from 'react'
import Toy from './Toy';

export default class RepoToy extends Component {
  render() {
  return(
    <Toy name="repo">
      <div className="triangle"></div>
      <div>git repo</div>
    </Toy>
  )}
}
