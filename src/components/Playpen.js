import React, { Component } from 'react'

import { DragDropContextProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import Header from './Header';
import Mat from './Mat';
import Chest from './Chest';
import Trash from './Trash';

export default class Playpen extends Component {
  render() { return (
    <DragDropContextProvider backend={HTML5Backend}>
      <div className="playpen">
        <Header />
        <Mat />
        <div className="drawer">
          <Chest />
          <Trash />
        </div>
      </div>
    </DragDropContextProvider>
  )}
}
