import { merge } from 'lodash';
import exampleResolver from './example';

const rootResolver = {
  Query: {
  },
  Mutation: {
  },
};

export default merge(
  rootResolver,
  exampleResolver,
);
