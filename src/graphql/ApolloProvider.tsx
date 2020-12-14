import React from "react";
import App from "../App";
import { InMemoryCache, ApolloClient, createHttpLink} from "@apollo/client";
import { ApolloProvider } from "@apollo/react-hooks";

const httpLink = createHttpLink({
  uri: "https://frontend-challenge.jungsoft.io/graphiql",
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
