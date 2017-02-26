import React, { Component } from 'react'
import '../styles/Home.css'
import Diagram from '../containers/DiagramCtrl'
import Panel from '../containers/PanelCtrl';

export default class Home extends Component {
  render() { return (
    <div className="home">
      <Diagram />
      { this.props.showPanel ?
        <Panel />
      : null
      }
    </div>
  )}
}
