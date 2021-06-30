import { gql } from "@apollo/client";

export const GET_USER = gql`
  query Users($value: String!, $per_page: Int!, $page: Int!) {
    users(value: $value, per_page: $per_page, page: $page)  {
      total_count
      items {
        login
        avatar_url
      }
    }
  }
`;

export const GET_USER_INFO = gql`
  query User($name: String!) {
    user(name: $name)  {
      login
      avatar_url
      name
      company
      email
      followers
      following
      location
      bio
    }
  }
`;
