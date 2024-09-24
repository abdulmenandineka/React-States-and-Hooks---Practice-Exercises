import React from "react";
import CounterDisplayer from "./CounterDisplayer";
import EvenCounterDisplayer from "./EvenCounterDisplayer";

class MyCounter extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      hoverMessage: "",
      timesMessage: ""
    };
  }

  allClickCounter = () => {
    this.setState((parametr) => {
      return { counter: parametr.counter + 1 };
    }, this.displayTheCount);
  };

  MouseEnter = () => {
    this.setState({ hoverMessage: "Click to increase the counter value!" });
  };

  MouseDown = () => {
    this.setState({ hoverMessage: "" });
  };

  // displayTheCount = () => {
  //   this.setState({
      // timesMessage: `Clicked ${this.state.counter} times`
  //   });
  // };

  render() {
    return (
      <>
        <button
          onClick={this.allClickCounter}
          onMouseEnter={this.MouseEnter}
          onMouseLeave={this.MouseDown}
        >
          updater
        </button>

        <div id="hover-message">{this.state.hoverMessage}</div>
        {/* <div>{this.state.timesMessage}</div> */}
        <div>
          <CounterDisplayer number={this.state.counter} />
          <EvenCounterDisplayer myCounter={this.state.counter} />
        </div>
      </>
    );
  }
}

export default MyCounter;
