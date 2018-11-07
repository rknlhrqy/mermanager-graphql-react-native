import gql from 'graphql-tag';

export const GET_MERMEN = gql`
  query {
    allMermen{
      id
      createdAt
      name
      location
    }
  }
`;

export const ADD_MERMAN = gql`
  mutation AddMerman($name: String!, $location: String!) {
    addMerman(name: $name, location: $location) {
      id
      createdAt
      name
      location
    }
  }
`;
