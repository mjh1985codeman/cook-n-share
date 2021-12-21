const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String
    email: String
    userCreations: [Creation]
    savedCreations: [Creation]
  }

  type Creation {
    _id: ID!
    username: String
    creationTitle: String
    ingredients: String
    creationDescription: String
    directions: String
    createdAt: String
  }

  type Query {
    me: User
  }

  type Auth {
    token: ID!
    user: User
  }

  type Mutation {
    login(username: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addCreation(
      creationTitle: String!
      ingredients: String!
      creationDescription: String!
      directions: String!
    ): Creation
  }
`;

module.exports = typeDefs;
