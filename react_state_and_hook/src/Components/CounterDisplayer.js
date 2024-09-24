import React, { Component } from 'react'

export class CounterDisplayer extends Component {
  render() {
    return (
      <h1>{this.props.number}</h1>
    )
  }
}

export default CounterDisplayer