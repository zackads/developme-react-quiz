import React, { Component } from "react";

class HideMe extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hidden: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      hidden: true,
    });
  }

  render() {
    return (
      <p hidden={this.state.hidden} onClick={this.handleClick}>
        {this.props.children}
      </p> // JSX
    );
  }
}

export default HideMe;
