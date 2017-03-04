import { printSchema } from 'graphql/utilities/schemaPrinter';
import { schema } from './graphql';

export default (req, res) => {
  res.set('Content-Type', 'text/plain');
  res.send(printSchema(schema));
};
