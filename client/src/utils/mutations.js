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
      }
      token
    }
  }
`;

export const ADD_CREATION = gql`
  mutation addCreation($creationText: String!) {
    addCreation(creationText: $creationText) {
      _id
      creationText
      username
      createdAt
      reviewCount
      reviews {
        _id
      }
    }
  }
`;
