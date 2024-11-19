import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

import { typeDefs } from './GraphQL/schema.js';
import { resolvers } from './GraphQL/resolvers.js';

const port = 5365;

const server = new ApolloServer({ typeDefs, resolvers });

const { url } = await startStandaloneServer(server, {
  listen: { port: port },
});

console.log(`GraphQL server running on ${port}`);
