import gql from "graphql-tag"

export default gql`
  mutation LoginWithGoogle($userId: String!, $serverAuthCode: String!) {
    loginWithGoogle(userId: $userId, serverAuthCode: $serverAuthCode) {
      id
      name
    }
  }
`
