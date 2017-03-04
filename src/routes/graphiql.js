import { graphiqlExpress } from 'graphql-server-express';

/**
 * GUI for graphql queries
 * WARNING: THIS SHOULD NOT BE EXPOSED IN PRODUCTION!!!
 */

export default graphiqlExpress({
  endpointURL: '/graphql',
});
