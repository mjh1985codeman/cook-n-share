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
    creations(username: String): [Creation]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Mutation {
    login(username: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addCreation(
      username: String!
      creationTitle: String!
      ingredients: String!
      creationDescription: String!
      directions: String!
    ): Creation
  }
`;

module.exports = typeDefs;

//Mutation Example:
// mutation addCreation($username: String!, $creationTitle: String!, $ingredients: String!, $creationDescription: String!, $directions: String!) {
//   addCreation(username: $username, creationTitle: $creationTitle, ingredients: $ingredients, creationDescription: $creationDescription, directions: $directions ) {
//     _id
//     creationTitle
//     ingredients
//     createdAt
//     username
//     creationDescription
//     directions
//   }
// }

// Query Variables:
// {
//   "username": "mhodges",
//   "creationTitle": "Turkey Burgers",
//   "ingredients": "Turkey, Mayo, Cheese",
//   "creationDescription": "Grill it and Eat it",
//   "directions": "Smash It"
// }

// Dont forget to include your token in the HTTP Headers!!!

// {
//   "Authorization": "Bearer **TOKEN GOES HERE**"
// }
