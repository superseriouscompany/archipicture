import React, { Component } from 'react'

export default class BoxInfo extends Component {
  constructor(props) {
    super(props)
    this.state = Object.assign({}, { box: this.props.box })
    this.handleChange = this.handleChange.bind(this)
  }

  render() { return (
    <div className="box-info">
      <label htmlFor="name">
        Name
        <input type="text" value={this.state.box.name} name="name" onChange={this.handleChange('name')}/>
      </label>

      <label htmlFor="description">
        Description
        <textarea onChange={this.handleChange('description')} value={this.state.box.description}></textarea>
      </label>
      <div className="details-container">
        { this.state.showDetails ?
          <div className="details">
            <a onClick={e => this.setState({showDetails: false})}>Hide Details</a>
            <table>
              <tbody>
                <tr>
                  <td>cost</td>
                  <td>{this.props.box.price}</td>
                </tr>
                <tr>
                  <td>region</td>
                  <td>{this.props.box.region}</td>
                </tr>
                <tr>
                  <td>cpu</td>
                  <td>{this.props.box.cpu}</td>
                </tr>
                <tr>
                  <td>memory</td>
                  <td>{this.props.box.memory}</td>
                </tr>
              </tbody>
            </table>
            <a href={this.props.box.gcloudUrl} target="_blank">View on Google Cloud Platform</a>
          </div>
        :
          <a onClick={e => this.setState({showDetails: true})}>Show Details</a>
        }
      </div>
    </div>
  )}

  handleChange(field) {
    return (e) => {
      const state = { box: {}}
      state.box[field] = e.target.value
      this.setState(state)
    }
  }
}

BoxInfo.propTypes = {

}
