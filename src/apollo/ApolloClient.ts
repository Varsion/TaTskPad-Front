import { ApolloClient, InMemoryCache } from "@apollo/client";
import { BaseUrl } from "@src/env";

export const client = new ApolloClient({
  uri: BaseUrl,
  cache: new InMemoryCache(),
});