import gql from 'graphql-tag';

export default gql`
  query($userId: String!) {
    userNotes(userId: $userId) {
      content
      id
      user_id
      title
    }
  }
`