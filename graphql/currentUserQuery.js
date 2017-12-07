import gql from "graphql-tag"

export default gql`
  query CurrentUser {
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
