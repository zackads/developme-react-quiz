import React, { Component } from "react";

import FormControl from "react-bootstrap/FormControl";
import Alert from "react-bootstrap/Alert";

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
        <FormControl onChange={(e) => this.handleInput(e)} value={value} />
        <Alert variant="danger" hidden={value.length >= length ? true : false}>
          Too short!
        </Alert>
      </>
    );
  }
}

export default MinimumLength;
