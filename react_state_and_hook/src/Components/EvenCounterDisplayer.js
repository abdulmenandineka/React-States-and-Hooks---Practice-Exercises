import React, { Component } from "react";

export class EvenCounterDisplayer extends Component {
  render() {
    const { myCounter } = this.props;
    const evenNumber = myCounter % 2 === 0 ? myCounter : myCounter-1 ;
    return (
      <div>
        <h1>Clicked {evenNumber} times</h1>
      </div>
    );
  }
}

export default EvenCounterDisplayer;
