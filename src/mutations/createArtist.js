import gql from 'graphql-tag';

export default gql`
  mutation($stageName: String!, $firstName: String!, $lastName: String!) {
    createArtist(
      stageName: $stageName
      firstName: $firstName
      lastName: $lastName
    ) {
      ok
      artist {
        id
      }
      errors {
        path
        message
      }
    }
  }
`;
