import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation LoginMutation($identifier: String!, $password: String!) {
    login(input: {
      identifier: $identifier,
      password: $password
    }) {
      jwt
      user {
        id
        username
        email
        role{
          name
        }
      }
    }
  }
`;

export const FETCH_ALL_TIMES = gql`
query{
  registeredTimes{
    id
    created_at
    user{
      name
      id
    }
  }
}`;

export const FETCH_TIMES_FOR_USER = gql`
  query FetchTimesForUser($userId: ID!) {
    registeredTimes(where: {
      user: {
        id: $userId
      }
    }) {
      id
      created_at
      user {
        name
        id
      }
    }
  }
`;


export const TIME_CHECK = gql`
mutation CreateRegisteredTime($input: createRegisteredTimeInput!) {
  createRegisteredTime(input: $input) {
    registeredTime {
      id
      created_at
      user {
        username
      }
    }
  }
}
`;

