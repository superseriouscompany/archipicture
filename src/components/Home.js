import React, { Component } from 'react'
import './Home.css'
import Diagram from '../containers/DiagramCtrl'

export default class Home extends Component {
  render() { return (
    <div className="home">
      <Diagram />
      { this.props.showInfoPanel ?
        <div className="info">
          Info Panel
        </div>
      : null
      }
    </div>
  )}
}
