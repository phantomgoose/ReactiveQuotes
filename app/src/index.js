import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Quotes from "./components/Quotes/Quotes";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<Quotes />, document.getElementById("root"));
registerServiceWorker();
