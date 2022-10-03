import React, { Component } from "react";
import QuoteButton from "../QuoteButton/QuoteButton";
import styles from "./Quote.module.css";

class Quote extends Component {
  upvote = () => this.props.incrementRating(1);
  downvote = () => this.props.incrementRating(-1);

  render() {
    const rating = this.props.rating;

    return (
      <div className={styles.quote}>
        <div className={styles.content}>
          <p>{`"${this.props.content}"`}</p>
          <p> — {this.props.author}</p>
        </div>
        <div className={styles.bottomBar}>
          <span className={styles.rating}>
            {rating >= 0 ? "+" : ""}
            {rating}
          </span>
          <div>
            <QuoteButton
              text="upvote"
              handleClick={this.upvote}
            />
            <QuoteButton
              text="downvote"
              handleClick={this.downvote}
            />
            <QuoteButton
              text="delete"
              handleClick={this.props.handleDeleteQuote}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Quote;
