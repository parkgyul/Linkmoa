// index.js 또는 최상위 컴포넌트에서 라우터 컴포넌트 사용
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom"; // 또는 HashRouter 사용 가능
import App from "./App";
import "./scss/style.scss";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
