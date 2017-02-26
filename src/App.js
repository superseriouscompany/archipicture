import React, { Component } from 'react';
import './App.css';
import StripeCheckout from 'react-stripe-checkout'

const baseUrl = window.location.href.match(/localhost/) ?
  'http://localhost:3000' :
  'https://archipicture.superserious.co';

export default class App extends Component {
  onToken(token) {
    const body = {
      email: token.email,
      token: token.id,
    }
    fetch(`${baseUrl}/pay`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' },
    }).then((response) => {
      if( !response.ok ) {
        throw(new Error('nope'));
      }
      alert('Paid.')
    }).catch((err) => {
      alert(err);
    })
    console.log(token);
  }

  render() { return (
    <div className="hello">
      <a href="https://github.com/login/oauth/authorize?scope=user:email&client_id=a3babf538c0e87a2d6ee">Login with Github</a>
      <a href="https://instagram.com/superseriouscompany" target="_blank">Instagram</a>
      <StripeCheckout
        token={this.onToken}
        stripeKey="pk_test_mmQIM1nxdtJu1AymtDN9nBCo"
        name="Super Serious Company"
        description="Help."
        panelLabel="Lose"
        amount={999}>
        <button className="pay">Donate</button>
      </StripeCheckout>
    </div>
  )}
}
