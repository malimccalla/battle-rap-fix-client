import gql from 'graphql-tag';

export default gql`
  {
    user: currentUser {
      id
      username
      email
    }
  }
`;
