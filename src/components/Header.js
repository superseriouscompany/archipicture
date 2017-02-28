import React, { Component } from 'react'

export default class Header extends Component {
  render() { return (
    <div className="header">
      <span style={{opacity: 0}}>$69</span>
      <div className="logout">
        neilsarkar &nbsp;<a>logout</a>
      </div>
    </div>
  )}
}

Header.propTypes = {

}
