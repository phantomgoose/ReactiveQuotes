import React, { Component } from "react";
import NewQuote from "../NewQuote/NewQuote";
import QuotesList from "../QuotesList/QuotesList";

class App extends Component {
  state = {
    quotes: [],
  }

  handleNewQuote = (event) => {
    event.preventDefault();
    const newQuote = {};
    const formData = new FormData(event.target);
    formData.forEach((value, key) => {
      newQuote[key] = value;
    });
    newQuote.rating = 0;
    const quotes = this.state.quotes.slice();
    this.setState({ quotes: quotes.concat([newQuote]) });
  }

  handleDeleteQuote = (idxToRemove) => {
    const quotes = this.state.quotes.filter((value, idx) => {
      return idx !== idxToRemove;
    });
    this.setState({ quotes: quotes });
  }

  incrementRating = (idx, value) => {
    this.setState((prev, props) => {
      const quotes = prev.quotes.slice();
      quotes[idx].rating += value;
      return { quotes: quotes };
    });
  }

  render() {
    return (
      <div>
        <NewQuote handleNewQuote={this.handleNewQuote} />
        <QuotesList
          quotes={this.state.quotes}
          incrementRating={this.incrementRating}
          handleDeleteQuote={this.handleDeleteQuote}
        />
      </div>
    );
  }
}

export default App;
