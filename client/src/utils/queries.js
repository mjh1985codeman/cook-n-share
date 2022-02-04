import { gql } from "@apollo/client";

export const GET_ME = gql`
  {
    me {
      _id
      username
      email
      userCreations {
        _id
        username
        creationTitle
        ingredients
        creationDescription
        directions
        createdAt
      }
      savedCreations {
        _id
        username
        creationTitle
        ingredients
        creationDescription
        directions
        createdAt
      }
    }
  }
`;

export const QUERY_ME_BASIC = gql`
  {
    me {
      _id
      username
      email
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

export const GET_CREATIONS = gql`
  query creations($username: String) {
    creations(username: $username) {
      _id
      username
      creationTitle
      ingredients
      creationDescription
      directions
      createdAt
    }
  }
`;
