import React, { Component } from 'react'

export default class Google extends Component {
  componentDidMount() {
    loadResource()
  }

  constructor(props) {
    super(props)
    this.state = {
      instances: []
    }
  }

  render() { return (
    <div className="nice">
      <a onClick={this.login.bind(this)}>Login</a>
      <br /><br />
      <a onClick={this.loadInstances.bind(this)}>Load instances</a>
      { this.state.instances.map((i, key) => (
        <dl key={key}>
          <dt>id</dt>
          <dd>{i.id}</dd>
          <dt>created</dt>
          <dd>{i.creationTimestamp}</dd>
          <dt>description</dt>
          <dd>{i.description}</dd>
          <dt>name</dt>
          <dd>{i.name}</dd>
          <dt>gcloud link</dt>
          <dd>{i.selfLink}</dd>
          <dt>size</dt>
          <dd>{i.machineType.split('/').slice(-1)[0]}</dd>
          <dt>pubkey</dt>
          <dd>{i.metadata.items[0].value}</dd>
          <dt>status</dt>
          <dd>{i.status}</dd>
        </dl>
      ))}
    </div>
  )}

  loadInstances() {
    const request = window.gapi.client.compute.instances.list({
      project: 'archipicture-1',
      zone:    'europe-west1-c',
    })
    request.execute((resp) => {
      if( resp.code ) { return alert(JSON.stringify(resp))}
      this.setState({
        instances: resp.items
      })
      console.log(resp)
    })
  }

  login() {
    window.gapi.client.setApiKey('PPm-U9_f5o_8sYQ64dzvilm9')
    window.gapi.auth.authorize({
      client_id: '996546979196-hbefa3mq559ie30ucuh96r44trcnuqff.apps.googleusercontent.com',
      scope:     'https://www.googleapis.com/auth/compute',
      immediate: false,
    }, function(authResult) {
      if( !authResult || authResult.error) {
        console.error(authResult && authResult.error || authResult);
        return alert('Auth failed.')
      }

      console.log(authResult);
    })
  }
}

function loadResource() {
  if( !window.gapi || !window.gapi.client ) {
    return setTimeout(loadResource, 50);
  }
  window.gapi.client.load('compute', 'v1');
}

Google.propTypes = {

}
