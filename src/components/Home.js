import React, { Component } from 'react'
import '../styles/Home.css'
import Diagram from '../containers/DiagramCtrl'
import Panel from '../containers/PanelCtrl';

export default class Home extends Component {
  render() {
    const panelClasses = ['panel-container'];
    if( this.props.showPanel ) { panelClasses.push('shown'); }
    return (
    <div className="home">
      <div className="diagram-container">
        <Diagram />
      </div>
      <div className={panelClasses.join(' ')}>
        <Panel />
      </div>
    </div>
  )}
}
