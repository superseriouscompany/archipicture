import React, { Component } from 'react'
import LilBox from './LilBox';
import BigBox from './BigBox';
import RepoToy from './RepoToy';

export default class Chest extends Component {
  render() { return (
    <div className="chest">
      <LilBox />
      <BigBox />
      <RepoToy />
    </div>
  )}
}
