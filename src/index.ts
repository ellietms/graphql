import { ApolloServer, gql } from "apollo-server";

// GraphQL schema

const typeDefs = gql`{
    type User {
        id: ID!
        name: STRING!
        email: STRING!
    }

    type Query {
        hello : STRING
        users: [User]
    }
}`;

// Resolvers for schema

const resolvers = {
  Query: {
    hello: () => "Hello world!",
    users: () => [
      { id: "1", name: "John Doe", email: "john@example.com" },
      { id: "2", name: "Jane Smith", email: "jane@example.com" },
    ],
  },
};

// create instance of ApolloServer

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({}) => {
  console.log(`Server ready at  here`);
});
