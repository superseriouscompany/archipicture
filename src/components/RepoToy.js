import React, { Component } from 'react'
import Toy from './Toy';

export default class RepoToy extends Component {
  render() {
  return(
    <Toy name="repo">
      <div className="triangle"></div>
      <br />
      git repo
    </Toy>
  )}
}
