import React, { Component } from "react";
import Quote from "../Quote/Quote";

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
              key={index} // <-- this is bad
              content={quote.content}
              author={quote.author}
              rating={quote.rating}
              incrementRating={incrementRating}
              handleDeleteQuote={handleDeleteQuote}
            />
          );
        });
  }
}

export default QuotesList;
