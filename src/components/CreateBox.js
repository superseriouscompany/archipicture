import React, { Component } from 'react'

export default class CreateBox extends Component {
  render() { return (
    <form className="create-box">
      <select>
        { this.props.repos && this.props.repos.map((r, key) => (
          <option key={key}>{r.full_name}</option>
        ))}
      </select>
      <table>
        <tbody>
          <tr>
            <td>region:</td>
            <td>
              europe
            </td>
            <td>
              <a>change</a>
            </td>
          </tr>
          <tr>
            <td>size:</td>
            <td>
              small
            </td>
            <td>
              <a>change</a>
            </td>
          </tr>
        </tbody>
      </table>
      <button>Go</button>
    </form>
  )}
}

CreateBox.propTypes = {
  repos: React.PropTypes.arrayOf(React.PropTypes.shape({
    full_name: React.PropTypes.string,
  })),
}
