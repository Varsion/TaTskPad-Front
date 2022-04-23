import React from 'react';
// import { ApolloProvider } from '@apollo/client';
// import { client } from "./apollo/ApolloClient";
 
import Router from './router/router';

import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
  } from "@apollo/client";

  const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache()
  });

function App() {
  return (
    <ApolloProvider client={client}>
      <Router />
    </ApolloProvider>
  );
}

export default App;
