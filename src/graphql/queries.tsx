import { gql } from "@apollo/client";

export const GET_USER = gql`
  query Users {
    users {
      total_count
      items {
        login
        avatar_url
      }
    }
  }
`;
