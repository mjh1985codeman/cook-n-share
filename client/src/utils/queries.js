import { gql } from "@apollo/client";

export const GET_ME = gql`
  {
    me {
      _id
      username
      email
      userCreations {
        _id
        creationTitle
        ingredients
        creationDescription
        directions
        createdAt
      }
      savedCreations {
        _id
        creationTitle
        ingredients
        creationDescription
        directions
        createdAt
      }
    }
  }
`;

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      userCreations {
        _id
        creationTitle
        ingredients
        creationDescription
        directions
        createdAt
      }
    }
  }
`;

export const QUERY_USERS = gql`
  query users {
    users {
      _id
      username
      email
      userCreations {
        _id
        creationTitle
        ingredients
        creationDescription
        directions
        createdAt
      }
    }
  }
`;

export const GET_CREATIONS = gql`
  query creations {
    creations {
      _id
      creationTitle
      ingredients
      creationDescription
      directions
      createdAt
    }
  }
`;
