import React, { Component } from 'react'
import { connect } from 'react-redux'
import Toy from './Toy';

class LilBox extends Component {
  constructor(props) {
    super(props)
    this.state = { firstTime: true }
    this.handleDrop = this.handleDrop.bind(this)
  }

  handleDrop(dropResult) {
    this.props.dispatch({
      type: 'mat:addBox',
      box:  {name: 'lilbox'},
    })
  }

  render() {
    const className = this.state.firstTime ? 'animated infinite pulse' : '';
  return(
    <Toy name="lilbox" className={className} onMouseDown={() => this.setState({firstTime: false})} handleDrop={this.handleDrop}>
      <div className="image">
        <img alt="Toy Box representing a virtual machine" style={{width: '159px'}} src="lilbox@2x.png" />
      </div>
      <div className="label">lil box</div>
    </Toy>
  )}
}

export default connect()(LilBox)
