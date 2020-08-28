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
      number: this.state.number + this.props.step,
    });
  }

  render() {
    const { step } = this.props;
    const { number } = this.state;

    return <p onClick={this.handleClick}>{number}</p>;
  }
}

export default CountBy;
