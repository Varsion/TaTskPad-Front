import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function renderDOM() {
  ReactDOM.render(
    <React.StrictMode>
      <App />
      <ToastContainer position="bottom-left" pauseOnHover autoClose={5000} />
    </React.StrictMode>,
    document.getElementById("root")
  );
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
renderDOM();
export default renderDOM;
