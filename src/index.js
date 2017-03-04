import express from 'express';
import graphql from './routes/graphql';
import graphiql from './routes/graphiql';
import schema from './routes/schema';
import health from './routes/health';

const app = express();
const PORT = process.env.PORT || 8080;
/**
 * Healthcheck
 */
app.all('/health', health);
/**
 * Endpoints
 */
app.use('/graphql', graphql);
/**
 * Develepment endpoints
 * WARNING: PLEASE DO NOT EXPOSE IN PRODUCTION!!!!
 */
if (process.env.NODE_ENV === 'development') {
  app.use('/graphiql', graphiql);
  app.use('/schema', schema);
}
/**
 * Express server start
 */
app.listen(PORT, () => {
  console.log(`
  Listening on port ${PORT} in ${process.env.NODE_ENV} mode.
  Routes enabled:
  -> graphQL itself:   http://localhost:${PORT}/graphql
  -> GUI for graphQL:  http://localhost:${PORT}/graphiql
  -> Print the schema: http://localhost:${PORT}/schema
  -> Check health:     http://localhost:${PORT}/health
  `);
});
