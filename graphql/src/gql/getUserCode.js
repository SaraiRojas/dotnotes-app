import gql from 'graphql-tag';

export default gql`
  query($user_id: String!) {
    getUserCode(user_id:$user_id)
  }
`