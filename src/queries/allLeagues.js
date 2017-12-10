import gql from 'graphql-tag';

export default gql`
  {
    leagues: allLeagues {
      id
      name
    }
  }
`;
