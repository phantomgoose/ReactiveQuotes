import React, { Component } from "react";
import QuoteButton from "./QuoteButton/QuoteButton";
import "./Quote.css";

class Quote extends Component {
  upvote = () => this.props.incrementRating(1);
  downvote = () => this.props.incrementRating(-1);

  render() {
    const rating = this.props.rating;

    return (
      <div className="quote">
        <div className="content">
          <p>{this.props.content}</p>
          <p> - {this.props.author}</p>
        </div>
        <div className="rating">
          <p>
            {rating >= 0 ? "+" : ""}
            {rating}
          </p>
        </div>
        <div className="buttons">
          <QuoteButton
            buttonName="Upvote"
            buttonColor="green"
            handler={this.upvote}
          />
          <QuoteButton
            buttonName="Downvote"
            buttonColor="red"
            handler={this.downvote}
          />
          <QuoteButton
            buttonName="Delete"
            buttonColor="black"
            handler={this.props.handleDeleteQuote}
          />
        </div>
      </div>
    );
  }
}

export default Quote;
