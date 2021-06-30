import { gql } from "@apollo/client";

export const GET_USER = gql`
  query Users($value: String!, $per_page: Int!, $page: Int!) {
    users(value: $value, per_page: $per_page, page: $page) {
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
    user(name: $name) {
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

export const GET_USER_REPOS = gql`
  query UserRepos($name: String!, $per_page: Int!, $page: Int!) {
    userRepos(name: $name, per_page: $per_page, page: $page) {
      name
      html_url
    }
  }
`;
