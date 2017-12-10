import gql from 'graphql-tag';

export default gql`
  {
    artists: allArtists {
      id
      stageName
      firstName
      lastName
    }
  }
`;
