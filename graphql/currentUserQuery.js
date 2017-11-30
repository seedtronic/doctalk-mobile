import gql from "graphql-tag"

export default gql`
  query CurrentUserQuery {
    currentUser {
      id
      name
      email
      photoUrl
      doctor {
        id
      }
    }
  }
`
