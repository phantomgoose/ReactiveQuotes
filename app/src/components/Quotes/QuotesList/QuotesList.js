import React, { Component } from "react";
import Quote from "./Quote/Quote";

class QuotesList extends Component {
  render() {
    const quotes = this.props.quotes;

    return !quotes
      ? null
      : quotes.map((quote, index) => {
          const incrementRating = value => {
            this.props.incrementRating(index, value);
          };
          const handleDeleteQuote = () => {
            this.props.handleDeleteQuote(index);
          };

          return (
            <Quote
              key={index}
              content={quote.content}
              author={quote.author}
              rating={quote.rating}
              incrementRating={incrementRating}
              handleDeleteQuote={handleDeleteQuote}
            />
          ); // dont do that with keys tho
        });
  }
}

export default QuotesList;
