const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    followerCount: Int
    creations: [Creation]
    reviews: [Review]
    followers: [User]
  }

  type Creation {
    _id: ID
    creationText: String
    username: String
    createdAt: String
    reviewCount: Int
    reviews: [Review]
  }

  type Review {
    _id: ID
    reviewText: String
    createdAt: String
    username: String
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    creations(username: String): [Creation]
    reviews(username: String): [Review]
    creation(_id: ID!): Creation
    review(_id: ID!): Review
  }

  type Auth {
    token: ID!
    user: User
  }

  type Mutation {
    login(username: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addCreation(creationText: String!): Creation
    addReview(creationId: ID!, reviewText: String!): Creation
    addFollower(followerId: ID!): User
  }
`;

module.exports = typeDefs;
