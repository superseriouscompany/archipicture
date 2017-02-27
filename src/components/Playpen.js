import React, { Component } from 'react'

import Header from './Header';
import Mat from './Mat';
import Chest from './Chest';
import Trash from './Trash';

export default class Playpen extends Component {
  render() { return (
    <div className="playpen">
      <Header />
      <Mat />
      <div className="drawer">
        <Chest />
        <Trash />
      </div>
    </div>
  )}
}

Playpen.propTypes = {

}
