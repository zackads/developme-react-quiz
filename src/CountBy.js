import React, { Component } from "react";

class CountBy extends Component {
  constructor(props) {
    super(props);

    this.state = {
      number: 0,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      number: this.state.number + 1,
    });
  }

  render() {
    const { step } = this.props;
    const { number } = this.state;

    return <p onClick={this.handleClick}>{number * step}</p>;
  }
}

export default CountBy;
