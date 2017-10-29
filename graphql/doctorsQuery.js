import gql from "graphql-tag"

export default gql`
  query DoctorsQuery {
    doctors {
      edges {
        node {
          id
          name
          lat
          lng
        }
      }
    }
  }
`
