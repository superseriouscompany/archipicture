import React, { Component } from 'react'
import './Home.css'
import Diagram from '../containers/DiagramCtrl'

export default class Home extends Component {
  render() { return (
    <div>
      <Diagram />
      <div className="info">
        Info Panel
      </div>
    </div>
  )}
}
