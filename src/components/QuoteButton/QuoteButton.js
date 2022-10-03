import styles from "./QuoteButton.module.css";

const QuoteButton = ({ text, handleClick }) => <button className={styles[text]} onClick={handleClick}>{text}</button>;

export default QuoteButton;
