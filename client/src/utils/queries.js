import { gql } from "@apollo/client";

export const GET_ME = gql`
  {
    me {
      _id
      username
      email
      creationCount
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
  }
`;

export const GET_CREATIONS = gql`
  {
    creations {
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
