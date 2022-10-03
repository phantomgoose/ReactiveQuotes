import React, { Component } from "react";

class NewQuote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
      author: "",
      showWarning: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (!this.formIsValid()) {
      this.setState({ showWarning: true });
    } else {
      this.props.handleNewQuote(event);
      this.setState({
        content: "",
        author: "",
        showWarning: false,
      });
    }
  }

  formIsValid() {
    return this.state.author.length > 2 && this.state.content.length > 2;
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <textarea
          value={this.state.content}
          name="content"
          onChange={this.handleChange}
        />
        <br />
        <label>
          Author:
          <input
            type="text"
            value={this.state.author}
            name="author"
            onChange={this.handleChange}
          />
        </label>
        <br />
        <input type="submit" value="Add Quote" />
        {this.state.showWarning ? (
          <p>Quote and name must be at least 3 characters long!</p>
        ) : null}
      </form>
    );
  }
}

export default NewQuote;
