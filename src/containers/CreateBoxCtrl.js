import React, {Component} from 'react';
import { connect } from 'react-redux';
import CreateBox from '../components/CreateBox'

class CreateBoxCtrl extends Component {
  render() { return (
    <CreateBox {...this.props} />
  )}
}

function mapStateToProps(state) {
  return {
    repos: [
      { full_name: 'superseriouscompany/archipicture.superserious.co' },
      { full_name: 'superseriouscompany/floats.superserious.co' },
      { full_name: 'superseriouscompany/giggles.superserious.co' },
      { full_name: 'neilsarkar/hello' },
    ]
  };
}

export default connect(mapStateToProps)(CreateBoxCtrl);
