import React, { Component } from 'react'
import Autocomplete from 'react-autocomplete'

export default class CreateBox extends Component {
  constructor(props) {
    super(props)
    this.state      = { value: '' }
    this.selectRepo = this.selectRepo.bind(this)
    this.create     = this.create.bind(this)
  }

  selectRepo(value, repo) {
    this.setState({
      value: value,
      repo: repo,
    })
  }

  render() { return (
    <form className="create-box" onSubmit={this.create}>
      <Autocomplete
        value={this.state.value}
        inputProps={{id: "repos-autocomplete", placeholder: "Select Repo to Deploy"}}
        items={this.props.repos}
        getItemValue={(item) => item.full_name}
        shouldItemRender={matchRepo}
        onChange={(event, value) => this.setState({ value })}
        onSelect={this.selectRepo}
        renderItem={(item, isHighlighted) => (
          <div
            style={isHighlighted ? {backgroundColor: 'hotpink', color: 'white'} : {}}
            className="autocomplete-item"
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

  create(e) {
    e.preventDefault()
    this.props.create({
      name: this.state.repo.full_name.split('/')[1],
      id:   this.state.repo.id,
    })
  }
}

function matchRepo(repo, value) {
  return repo.full_name.toLowerCase().indexOf(value.toLowerCase()) !== -1;
}


CreateBox.propTypes = {
  repos: React.PropTypes.arrayOf(React.PropTypes.shape({
    full_name: React.PropTypes.string,
  })),
  create: React.PropTypes.func.isRequired,
}
