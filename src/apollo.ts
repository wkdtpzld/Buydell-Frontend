import { ApolloClient } from "@apollo/client";
import { InMemoryCache, makeVar } from "@apollo/client/cache";

export const isLoggedInVar = makeVar(false);

export const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          isLoggedIn: {
            read() {
              return isLoggedInVar();
            }
          }
        }
      }
    }
  }),
});