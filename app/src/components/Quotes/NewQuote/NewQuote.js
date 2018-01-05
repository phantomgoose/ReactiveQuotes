import React, { Component } from "react";

class NewQuote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
      author: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  formIsValid() {
    return this.state.author.length > 2 && this.state.content.length > 2;
  }

  render() {
    return (
      <form onSubmit={this.props.handleNewQuote}>
        <textarea
          value={this.state.quote}
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
        <input type="submit" value="Add Quote" disabled={!this.formIsValid()} />
      </form>
    );
  }
}

export default NewQuote;
