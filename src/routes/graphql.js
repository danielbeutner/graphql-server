import { Router } from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress } from 'graphql-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import typeDefs from '../schema';
import resolvers from '../resolvers';
/**
 * express Router
 */
const graphql = Router();
/**
 * GraphQL schema
 */
export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});
/**
 * Use the body parser and graphql middleware
 */
graphql.use(bodyParser.json());
/**
 * GraphQL server
 */
graphql.use(graphqlExpress(request => ({
  schema,
  context: {
    /**
     * @TODO: more "context" to come
     */
  },
})));

export default graphql;