import React, { Component } from 'react'
import Autocomplete from 'react-autocomplete'

export default class CreateBox extends Component {
  constructor(props) {
    super(props)
    this.state = { value: '' }
    this.selectRepo = this.selectRepo.bind(this)
  }

  selectRepo(value, repo) {
    this.setState({
      value: value,
      repo: repo,
    })
  }

  render() { return (
    <form className="create-box">
      <select>
        { this.props.repos && this.props.repos.map((r, key) => (
          <option key={key}>{r.full_name}</option>
        ))}
      </select>

      <label htmlFor="repos-autocomplete">Choose a repo to deploy</label>
      <Autocomplete
        value={this.state.value}
        inputProps={{id: "repos-autocomplete"}}
        items={this.props.repos}
        getItemValue={(item) => item.full_name}
        shouldItemRender={matchRepo}
        onChange={(event, value) => this.setState({ value })}
        onSelect={this.selectRepo}
        renderItem={(item, isHighlighted) => (
          <div
            style={isHighlighted ? {backgroundColor: 'hotpink'} : {}}
            key={item.id}
          >{item.full_name}</div>
        )}
      />
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

function matchRepo(repo, value) {
  return repo.full_name.toLowerCase().indexOf(value.toLowerCase()) !== -1;
}


CreateBox.propTypes = {
  repos: React.PropTypes.arrayOf(React.PropTypes.shape({
    full_name: React.PropTypes.string,
  })),
}
