import gql from "graphql-tag"

export default gql`
  query SpecialtiesQuery {
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
