import gql from "graphql-tag";

export const LOGIN_USER = gql`
  mutation loginUser($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        _id
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
          creationTitle
          ingredients
          creationDescription
          directions
          createdAt
        }
        savedCreations {
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
    $creationTitle: String!
    $ingredients: String!
    $creationDescription: String!
    $directions: String!
  ) {
    addCreation(creationText: $creationText) {
      _id
      creationTitle
      ingredients
      creationDescription
      directions
      createdAt
    }
  }
`;
