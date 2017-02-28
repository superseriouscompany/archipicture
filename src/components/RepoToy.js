import React, { Component } from 'react'
import Toy from './Toy';

export default class RepoToy extends Component {
  render() {
  return(
    <Toy name="repo">
      <div className="image">
        <img src="triangle@2x.png" style={{width: '85px'}}/>
      </div>
      <div>git repo</div>
    </Toy>
  )}
}
