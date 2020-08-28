import React, { Component } from "react";

class MinimumLength extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
    };

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    this.setState({
      value: e.target.value,
    });
  }

  render() {
    const { value } = this.state;
    const { length } = this.props;

    return (
      <>
        <input onChange={(e) => this.handleInput(e)} value={value} />
        <p hidden={value.length >= length ? true : false}>Too short!</p>
      </>
    );
  }
}

export default MinimumLength;
