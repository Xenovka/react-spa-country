import React from "react";
import ReactDOM from "react-dom/client";
import AOS from "aos";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { polyfillCountryFlagEmojis } from "country-flag-emoji-polyfill";

import App from "./app";

import "./index.css";
import "aos/dist/aos.css";

AOS.init();

polyfillCountryFlagEmojis();

const client = new ApolloClient({
  uri: "https://countries.trevorblades.com/",
  cache: new InMemoryCache()
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
