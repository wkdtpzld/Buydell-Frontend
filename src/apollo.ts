import { ApolloClient, createHttpLink } from "@apollo/client";
import { InMemoryCache, makeVar } from "@apollo/client/cache";
import { LOCALSTORAGE_TOKEN, REFRESH_TOKEN } from './constants';
import { getCookie } from './utils/useCookie';
import { setContext } from '@apollo/client/link/context';

const token = localStorage.getItem(LOCALSTORAGE_TOKEN);
const reToken = getCookie(REFRESH_TOKEN);

export const isLoggedInVar = makeVar(Boolean(token));
export const accessToken = makeVar(token);
export const refreshToken = makeVar(reToken);

const httpLink = createHttpLink({
  uri: 'http://localhost:3000/graphql',
  credentials: 'same-origin',
})

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers, 
      'x-jwt': accessToken() || '',
      'set-cookie': [`${REFRESH_TOKEN}=${refreshToken()}`],
    }
  }
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          isLoggedIn: {
            read() {
              return isLoggedInVar();
            }
          },
          accessToken: {
            read() {
              return accessToken();
            }
          },
          refreshToken: {
            read() {
              return refreshToken();
            }
          }
        }
      }
    }
  }),
});