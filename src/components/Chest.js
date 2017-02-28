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
      <div className="toy name">
        <div className="image">
          <img src="rectangle@2x.png" style={{width: '80px'}}/>
        </div>
        <div className="label">name</div>
      </div>
      <div className="toy pubkey">
        <div className="image">
          <img src="oval@2x.png" style={{width: '75px'}}/>
        </div>
        <div className="label">pubkey</div>
      </div>
    </div>
  )}
}
