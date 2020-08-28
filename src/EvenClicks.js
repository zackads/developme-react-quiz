import React, { Component } from "react";

class EvenClicks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicks: 1,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      clicks: this.state.clicks + 1,
    });
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.clicks} -- {this.state.clicks % 2 === 0 ? "Even" : "Odd"}
      </button> // JSX
    );
  }
}

export default EvenClicks;
