import gql from "graphql-tag"

export default gql`
  query Specialties {
    specialties {
      edges {
        node {
          id
          title
        }
      }
    }
  }
`
