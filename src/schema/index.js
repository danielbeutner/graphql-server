import exampleSchema from './example';

const rootSchema = `
  # the schema allows the following query:
  type Query {
  }

  # this schema allows the following mutation:
  type Mutation {
  }

  # we need to tell the server which types represent the root query
  # and root mutation types. We call them RootQuery and RootMutation by convention.
  schema {
    query: Query
    mutation: Mutation
  }
`;

export default [
  rootSchema,
  exampleSchema,
];
