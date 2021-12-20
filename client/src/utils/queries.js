import { gql } from "@apollo/client";

export const GET_ME = gql`
  {
    me {
      _id
      username
      email
      creationCount
      userCreations {
        creationText
        username
        createdAt
      }
      savedCreations {
        creationText
        username
        createdAt
      }
    }
  }
`;
