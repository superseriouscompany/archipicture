import React, {Component} from 'react';
import { connect } from 'react-redux';
import CreateBox from '../components/CreateBox'

class CreateBoxCtrl extends Component {
  constructor(props) {
    super(props)
    this.create = this.create.bind(this)
  }
  render() { return (
    <CreateBox {...this.props} create={this.create}/>
  )}

  create(box) {
    this.props.dispatch({
      type: 'infra:add',
      box,
    })
  }
}

function mapStateToProps(state) {
  return {
    repos: [
      { id: 1, full_name: 'superseriouscompany/archipicture.superserious.co' },
      { id: 2, full_name: 'superseriouscompany/floats.superserious.co' },
      { id: 3, full_name: 'superseriouscompany/giggles.superserious.co' },
      { id: 4, full_name: 'neilsarkar/hello' },
    ]
  };
}

export default connect(mapStateToProps)(CreateBoxCtrl);
