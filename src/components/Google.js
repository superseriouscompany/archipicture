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
      <br /><br />
      <a onClick={this.createInstance.bind(this)}>Create instance</a>
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
          <dd>{i.metadata.items && i.metadata.items[0] && i.metadata.items.value}</dd>
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

  createInstance() {
    const resource = {
      name:        'instance-3',
      zone:        'projects/archipicture-1/zones/europe-west1-c',
      machineType: 'projects/archipicture-1/zones/europe-west1-c/machineTypes/f1-micro',
      "disks": [{
        "type": "PERSISTENT",
        "boot": true,
        "mode": "READ_WRITE",
        "autoDelete": true,
        "deviceName": "instance-3",
        "initializeParams": {
          "sourceImage": "https://www.googleapis.com/compute/v1/projects/ubuntu-os-cloud/global/images/ubuntu-1604-xenial-v20170224",
          "diskType": "projects/archipicture-1/zones/europe-west1-c/diskTypes/pd-ssd",
          "diskSizeGb": "10"
        }
      }],
      "networkInterfaces": [{
        "network": "projects/archipicture-1/global/networks/default",
        "subnetwork": "projects/archipicture-1/regions/europe-west1/subnetworks/default",
        "accessConfigs": [
          {
            "name": "External NAT",
            "type": "ONE_TO_ONE_NAT"
          }
        ]
      }],
    }

    const request = window.gapi.client.compute.instances.insert({
      project: 'archipicture-1',
      zone:    'europe-west1-c',
      resource: resource,
    })

    request.execute((resp) => {
      if( resp.code ) { console.error(resp); return alert(JSON.stringify(resp))}
      console.log(resp);
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
