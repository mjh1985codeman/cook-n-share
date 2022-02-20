import gql from "graphql-tag";

export const LOGIN_USER = gql`
  mutation loginUser($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, password: $password, email: $email) {
      user {
        _id
        username
        email
        userCreations {
          username
          creationTitle
          ingredients
          creationDescription
          directions
          createdAt
        }
        savedCreations {
          username
          creationTitle
          ingredients
          creationDescription
          directions
          createdAt
        }
      }
      token
    }
  }
`;

export const ADD_CREATION = gql`
  mutation addCreation(
    $username: String!
    $creationTitle: String!
    $ingredients: String!
    $creationDescription: String!
    $directions: String!
  ) {
    addCreation(
      username: $username
      creationTitle: $creationTitle
      ingredients: $ingredients
      creationDescription: $creationDescription
      directions: $directions
    ) {
      username
      creationTitle
      ingredients
      creationDescription
      directions
      createdAt
    }
  }
`;
