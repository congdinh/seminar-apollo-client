import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

const url = window._env_["REACT_APP_RESOUCE_ENDPOINT"];

console.log("env: ", window._env_);
console.log("url: ", url);

const client = new ApolloClient({
  uri: "http://localhost:9005/yourql"
});

const Doc = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

ReactDOM.render(<Doc />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
