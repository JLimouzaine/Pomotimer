import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

let minutes = parseInt(300 / 60, 10);
let seconds = parseInt(300 % 60, 10);
console.log(minutes, seconds);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
