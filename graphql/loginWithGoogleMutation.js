import gql from "graphql-tag"

export default gql`
  mutation LoginWithGoogle($idToken: String!, $photoUrl: String) {
    loginWithGoogle(idToken: $idToken, photoUrl: $photoUrl) {
      token
    }
  }
`
