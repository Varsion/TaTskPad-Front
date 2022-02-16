import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { client } from "./apollo/ApolloClient";

function App() {
  return (
    <ApolloProvider client={client}>
    </ApolloProvider>
  );
}

export default App;
