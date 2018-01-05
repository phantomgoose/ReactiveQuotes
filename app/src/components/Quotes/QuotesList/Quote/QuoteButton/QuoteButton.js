import React, { Component } from "react";
import "./QuoteButton.css";

class QuoteButton extends Component {
  render() {
    return (
      <button className={this.props.buttonColor} onClick={this.props.handler}>
        {this.props.buttonName}
      </button>
    );
  }
}

export default QuoteButton;
