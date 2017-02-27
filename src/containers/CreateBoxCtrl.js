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
      box: Object.assign({}, box, {
        price:       '$25/month',
        region:      'Europe - London',
        cpu:         4,
        memory:      '15gb',
        sha:         '78cfdfb8dfc63b5098e3941da588f7e6fe4ea874',
        ip:          '10.1.1.2',
        sshUsername: 'neilsarkar',
        gcloudUrl:   'https://console.cloud.google.com/compute/instancesDetail/zones/europe-west1-c/instances/instance-1',
      }),
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
