import gql from 'graphql-tag';

export default gql`
  {
    users: allUsers {
      id
      username
      email
    }
  }
`;
